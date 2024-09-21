import { useState } from 'react'
import './App.css'
import ExpenseList from './Components/ExpenseList'
import ExpenseFilter from './Components/ExpenseFilter'
import Form from './Components/Form'



function App() {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaaa', amount: 10, category: "Utilities" },
    { id: 2, description: 'bbb', amount: 10, category: "Groceries" },
    { id: 3, description: 'cccc', amount: 10, category: "Utilities" },
    { id: 4, description: 'ddd', amount: 10, category: "Entertainment" },
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

  if (expenses.length === 0) return null

  return (
    <>
      <div className='mb-5'>
        <Form onSubmit={e => setExpenses([...expenses, { ...e, id: expenses.length + 1 }])} />
      </div>
      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(visibleExpenses.filter(e => e.id !== id))} />
    </>
  )
}

export default App
