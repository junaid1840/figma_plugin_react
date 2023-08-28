import React, { useEffect, useState } from 'react';
import { getReadWriteKey, getUserDetails } from '../services/auth';
import { REDIRECT_URL } from '../constants/global';
import { EVENT_TYPE } from '../constants/event';

import '../styles/ui.css';

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: EVENT_TYPE.GET_USER_FROM_LOCAL_STORAGE } }, '*');
    window.onmessage = (event) => {
      const { type, data } = event.data.pluginMessage;
      if (type === EVENT_TYPE.GET_USER_FROM_LOCAL_STORAGE) {
        setUserDetails(data);
      }
    };
  }, []);

  const saveDataInLocalStorage = (userDetails) => {
    parent.postMessage({ pluginMessage: { type: EVENT_TYPE.SET_USER_IN_LOCAL_STORAGE, userDetails } }, '*');
  };

  const goToLogin = async () => {
    setIsLoading(true);
    const readWriteKeys = await getReadWriteKey();
    const intervalId = setInterval(async () => {
      try {
        const userDetailsResponse = await getUserDetails(readWriteKeys.read_key);
        if (userDetailsResponse) {
          setUserDetails(userDetailsResponse);
          saveDataInLocalStorage(userDetailsResponse);
          setIsLoading(false);
          clearInterval(intervalId);
        }
      } catch (e) {}
    }, 5000);
    window.open(`${REDIRECT_URL}?writeKey=${readWriteKeys.write_key}`, '_blank');
  };

  if (userDetails) {
    return (
      <>
        <h1>User logged in</h1>
        <p>Welcome to designPro {userDetails.user.full_name}</p>
      </>
    );
  }

  return (
    <div>
      <button onClick={goToLogin}>Login With browser</button>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
