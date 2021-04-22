import { useHistory } from 'react-router-dom';
import '../styles/CloseButton.css'

const CloseButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/")
  }

  return(<p className="close" onClick={handleClick}/>);
}

export default CloseButton;