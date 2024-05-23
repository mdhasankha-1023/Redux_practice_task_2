import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layouts/Main.jsx'
import { Provider } from 'react-redux'
import store from './App/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
)
