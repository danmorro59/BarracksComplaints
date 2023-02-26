import React,{useState} from "react"
import Admin from "./Admin"
const Login = ({input, setUserInput, handleSubmit, setLogin}) =>{
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }
  const backButton = () =>{
    setLogin(false)
  }
  const [password, setPassword] = useState('hi')
  if(input === password){
    return <Admin setLogin={setLogin}/>
  }return(
    <div className="loginCont">
      <form onSubmit={handleSubmit} className='loginForm'>
        <h1>Admin:</h1>
        <input placeholder="Password" type="text" value={input} onChange={handleChange}/>
        <input type="submit" id="loginSubmit"/>
        <button onClick={backButton} id="backBtn">back</button>
      </form>
    </div>
  )
}

export default Login