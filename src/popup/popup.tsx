import React from 'react'
import ReactDOM from 'react-dom/client'

const test = <p>Hello World!</p>
const rootElem = document.createElement('div')
rootElem.id = "root"
document.body.appendChild(rootElem)


const root = ReactDOM.createRoot(rootElem as HTMLElement);
root.render(
  <React.StrictMode>
    <p>Hello World!</p>
  </React.StrictMode>
);
