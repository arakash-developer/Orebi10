import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Quantity from './context/Quantity.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Quantity>
      <App />
    </Quantity>
  </React.StrictMode>,
)
