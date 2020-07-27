import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/font.css'
import App from './views'
import * as serviceWorker from './assets/js/serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
