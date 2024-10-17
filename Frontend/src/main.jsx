import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'; 
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreContextProvider>
            <App/>
        </StoreContextProvider>
    </BrowserRouter>
)
