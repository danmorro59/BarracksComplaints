import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Complete = ({complete, setComplete}) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:5001/complaints/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setComplete(prevData => prevData.filter(item => item.id !== id));
    })
    .catch(error => console.error(error));
  }
  
    return(
      <div className='theComplete'>
      {  complete.map(item => (
          <div key={item.id} className="theComplaints">
            <div className='pDiv'>
            <div className="itemContainer">{item.name}&nbsp;&nbsp;|&nbsp;&nbsp;{item.room}&nbsp;&nbsp;|&nbsp;&nbsp;{item.contact}&nbsp;&nbsp;| &nbsp;&nbsp;{item.description}</div>
              <button id={item.id} onClick={() => handleDelete(item.id)} className="pendingBtnsDelete"><FontAwesomeIcon icon={faTrashCan} size="2x" /></button>
            </div>
          </div>
        ))}
      </div>
    )
  
 
  
}
export default Complete