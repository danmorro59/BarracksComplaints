import React, {useState, useEffect} from 'react'
import Complete from './Complete'
import Pending from './Pending'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Admin = ({setLogin}) => {
  const handleLogin = () => {
    setLogin(false)
  }
  const [data, setData] = useState([]);
  const [complete, setComplete] = useState([])
  const [updated, setUpdate] = useState(false)
  const [deleted, setDelete] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:5001/complaints')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  useEffect(() => {
    fetch('http://localhost:5001/completed')
      .then(response => response.json())
      .then(data => setComplete(data));
  }, []);

  const handleComplete = () => {
    setUpdate(true)
  }
  const handleBack = () => {
    setUpdate(false)
  }
  if(updated){
    return (
      <div>
        <button id='backToPending' onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} size="2x" /></button>
        < Complete complete={complete} setComplete={setComplete}/>
      </div>
    )
  }
  return(
    <div>
      <ul className="nav">
        <li onClick={handleLogin} id="homeBtn">Home &nbsp;</li>
        <li > &nbsp; &nbsp;Admin</li>
      </ul>
      <button id='completed' onClick={handleComplete}>Completed</button>
      < Pending data={data} setData={setData}/>
      
    </div> 
  )
}

export default Admin