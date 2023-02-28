import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';




const Pending = ({data, setData}) => {
  const handleDelete = (id) => {
    fetch(`/complaints/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(prevData => prevData.filter(item => item.id !== id));
    })
    .catch(error => console.error(error));
  }

  const handleUpdate = (id) => {
    fetch(`/complaints/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Remove the updated item from the state
      console.log(data)
      setData(prevData => prevData.filter(item => item.id !== id))
    })
    .catch(error => console.error(error));
  }
  
 
    return(
      <div className='pendingDivContainer'>
        <h1>Pending</h1>
        {data.map(item => (
          <div key={item.id} className="theComplaints">
            <div className='pDiv'>
              <div className='itemContainer'>{item.name}&nbsp;&nbsp;|&nbsp;&nbsp;{item.room}&nbsp;&nbsp;|&nbsp;&nbsp;{item.contact}&nbsp;&nbsp;| &nbsp;&nbsp;{item.description}</div>
              <div className='btnDiv'>
                <button id={item.id} className="pendingBtnsUpdate" onClick={() => handleUpdate(item.id)}><FontAwesomeIcon icon={faCheck} size="2x" /></button>
                <button id={item.id} className="pendingBtnsDelete" onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} size="2x" /></button>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    )
        

}
export default Pending