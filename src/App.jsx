import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './data.js'
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction'
import Title from './components/Title'
import { mainListItems } from './components/ListItems'
import { mockTransactions } from './data.js'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard />
    <Transaction />
    <Title />
    { mainListItems }
    </>
  )
}

export default App
