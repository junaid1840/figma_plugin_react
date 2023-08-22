import React, {useState} from 'react';
import '../styles/ui.css';

function App() {
  const [Figma, setFigma] = useState()
  // const textbox = React.useRef<HTMLInputElement>(undefined);

  // const countRef = React.useCallback((element: HTMLInputElement) => {
  //   if (element) element.value = '5';
  //   textbox.current = element;
  // }, []);
  //
  // const onCreate = () => {
  //   const count = parseInt(textbox.current.value, 10);
  //   parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  // };
  //
  // const onCancel = () => {
  //   parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  // };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
      if (type === 'figmaInit') {
        console.log(message);
        setFigma(message)
      }

    };
  }, []);

  React.useEffect(() => {
    if (Figma) {
      console.log('Client storage', Figma)
    }
  }, [Figma]);
  const goToLogin = () => {
    window.open('http://localhost:3001/', '_blank')
  }

  return (
    <div>
    {/*<GoogleLogin*/}
    {/*    hosted_domain="*"*/}
    {/*    onSuccess={credentialResponse => {*/}
    {/*        console.log(credentialResponse);*/}
    {/*    }}*/}
    {/*    onError={() => {*/}
    {/*        console.log('Login Failed');*/}
    {/*    }}*/}
    {/*/>*/}
    {/*  <button*/}
    {/*      onClick={googleLogin}*/}
    {/*  >*/}
    {/*    Login With browser*/}
    {/*  </button>*/}
      <button
          onClick={goToLogin}
      >
        Login With browser
      </button>
      {/*<button*/}
      {/*    onClick={openIframe}*/}
      {/*>*/}
      {/*  Open iframe*/}
      {/*</button>*/}
      <h1>This is react component</h1>
      {/*<img src={logo} />*/}
      {/*<h2>Rectangle Creator</h2>*/}
      {/*<p>*/}
      {/*  Count: <input ref={countRef} />*/}
      {/*</p>*/}
      {/*<button id="create" onClick={onCreate}>*/}
      {/*  Create*/}
      {/*</button>*/}
      {/*<button onClick={onCancel}>Cancel</button>*/}
    </div>
  );
}

export default App;
