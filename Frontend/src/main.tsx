// src/index.tsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css'; // Import your global CSS or MUI theme here
const clientId = '1066792297988-jfnac8khrkbdrgnnesrn5ja5tbsn1ov4.apps.googleusercontent.com'
createRoot(document.getElementById('root')!).render(
   <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>  
);
