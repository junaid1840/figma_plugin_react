import React, { useState } from 'react';
import { routes } from './routes/routes';

import './styles/ui.css';

import './styles.scss';

function App() {
  // const route = useSelector((state) => state.location);
  const [route] = useState('/');
  return <div className="wrapper">{routes[route]}</div>;
}

export default App;
