import { useSparepartContext } from '../hooks/useSparepartContext'
import { useNavigate } from "react-router-dom";


const SparepartDetails = ({ SparePart }) => {
    const {dispatch} = useSparepartContext()

    const handleClick = async() => {
        const response = await fetch('/api/spareParts/' + SparePart._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_SPAREPART', payload: json})
        }   
    }

    let navigate = useNavigate();
    const routeChange = () => {
    let path = `UpdateSparepart/${SparePart._id}`;
    navigate(path);
  };

    return (
        <div className="workout-details">
            <h4>{SparePart.name}</h4>
            <p><strong>Price: </strong>{SparePart.price}</p>
            <p><strong>Discount: </strong>{SparePart.discount}</p>
            <p><strong>Description: </strong>{SparePart.description}</p>
            <p>{SparePart.createdAt}</p>
            <button onClick={routeChange} className="updateBtn">Update</button>
            <button onClick={handleClick} className="deleteBtn">Delete</button>
        </div>
    )
}

export default SparepartDetails