import React, {useState} from 'react'
import Submitted from './Submitted'
const Home = ({setLogin}) => {
  
  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [submitted, setSubmit] = useState(false)
  const handleLogin = () => {
    setLogin(true)
  }
  const onSubmitForm = async e =>{
    e.preventDefault()
    setSubmit(true)
    try {
      const body = {name, room, description, contact}
      const response = await fetch('/complaints',
        {
          method: "POST",
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify(body)
        })
      setName("")
      setRoom("")
      setDescription("")
      setContact("")
    } catch (error) {
      console.log(error)
    }
  }
  if(submitted){
    return <Submitted setSubmit={setSubmit}/>
  }
  return(
    <div>
      <img src='http://cdn.shopify.com/s/files/1/0742/9831/products/Blank_ega_with_gold_border_7871c24a-de8b-450f-9767-24e585038615_1200x1200.png?v=1481252494' />
      <ul className="nav">
        <li id="homeBtn">Home &nbsp;</li>
        <li onClick={handleLogin}> &nbsp; &nbsp;Admin</li>
      </ul>
      <div className='homeCont'>
        <h1>Problem?</h1>
        <form onSubmit={onSubmitForm} className='homeForm'>
          <label>Full Name:</label>
          <input type="text" 
            placeholder="First & Last Name"
            value={name}
            onChange = {e =>setName(e.target.value)}
            id='homeInput'
          />
          <label>Room Number:</label>
          <input type="text" 
            placeholder="RM #" 
            value={room}
            onChange = {e =>setRoom(e.target.value)}
            id='homeInput'
          />
          <label>Phone Number:</label>
          <input type="text" 
            placeholder="Contact #" 
            value={contact}
            onChange = {e =>setContact(e.target.value)}
            id='homeInput'
            />
          <label>Description:</label>
          <input type="text" 
            placeholder="Description" 
            value={description}
            onChange = {e =>setDescription(e.target.value)}
            id='homeInput'
          />
          <input type="submit" 
            id='homeInput'
            className='homeSubmit'
          />
        </form>
      </div>
    </div>

  )
}

export default Home;