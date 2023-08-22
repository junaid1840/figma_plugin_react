import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import {GoogleOAuthProvider} from "@react-oauth/google";

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(
      <GoogleOAuthProvider clientId="475492983174-3e8c3rp19umkarlr1g1qoief12mc33ds.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
  );
});
