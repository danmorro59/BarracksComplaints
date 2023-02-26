import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const Submitted = ({setSubmit}) => {
  const handleBack = () => {
    setSubmit(false)
  }
  return (
    <div className="submittedContainer">
      <h1>Thanks for your submission!</h1>
      <div className='thumbsUp'><FontAwesomeIcon icon={faThumbsUp} size="10x" /></div>
      <button onClick={handleBack} className="submittedBackBtn">back</button>
    </div>
  )
}
export default Submitted