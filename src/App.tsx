import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo-container">
        <img src="src\assets\pngtree-study-icons-boy-sitting-at-a-table-with-book-vector-png-image_6925863.png" className="logo"/>
      </div>
      <h1>Gestor de tareas</h1>
      <div className="card">
        <p>Cuanto deseas hacer?</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
    </>
  )
}

export default App
