import React from 'react'
/* import Bulma from 'react-bulma-components'
 */import ReactDOM from 'react-dom'
import ProductLayout from './Products/Components/ProductLayout'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ProductLayout />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
