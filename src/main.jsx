import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-ook8zi46l6r2d1v7.us.auth0.com"
    clientId="bvIJJKo9LSRj6vfv7NVUxYGdScdCz13Q"
    authorizationParams={{
      redirect_uri: window.location.origin // Updated to use authorizationParams.redirect_uri
    }}
  >
    <App />
  </Auth0Provider>
);