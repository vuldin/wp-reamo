import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'mobx-react'
import 'sanitize.css/sanitize.css'
import 'font-awesome/css/font-awesome.css'
import Store from './store'

const store = new Store()

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
