import { useState } from 'react'
import './App.css'
import ExpenseList from './Components/ExpenseList'


function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaaa', amount: 10, category: "utilised" },
    { id: 2, description: 'bbb', amount: 10, category: "utilised" },
    { id: 3, description: 'cccc', amount: 10, category: "utilised" },
    { id: 4, description: 'ddd', amount: 10, category: "utilised" },
  ])

  if (expenses.length === 0) return null

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </>
  )
}

export default App
