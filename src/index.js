import React from 'react'
import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals';
import App from './components/app/app'
import { AppContextProvider } from './contexts'
import { GlobalStyles } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('⚛️')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
