import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h3>Chai aur react!</h3>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to visit google</a>
)

const anotherUser = 'chai hi chai';

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
