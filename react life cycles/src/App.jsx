import { useState } from 'react'
import './App.css'
import Parent from './Parent'
// import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parent/>
      {/* <Child/> */}
    </>
  )
}

export default App
