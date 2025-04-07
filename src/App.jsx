import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrowserHistory from './comps/BrowserHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserHistory/>
  )
}

export default App
