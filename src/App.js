import React, {useState} from 'react'
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login';
import Admin from './Components/Admin'
function App() {
  const [login, setLogin] = useState(false)
  const [input, setUserInput] = useState('')
  const handleSubmit = (e) => {
    setUserInput(input)
  }
  
  
  if(!login){
    return <Home setLogin={setLogin} />
  }return <Login setLogin={setLogin} input={input} setUserInput={setUserInput} handleSubmit={handleSubmit}/>
}

export default App;
