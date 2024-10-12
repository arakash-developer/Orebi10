import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Quantity from './context/Quantity.jsx'
import { Provider } from 'react-redux'
import Store from './store/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}> 
      <Quantity>
        <App />
      </Quantity>
    </Provider>
  </React.StrictMode>,
)
