import { useEffect } from 'react'
import { useSparepartContext } from '../hooks/useSparepartContext'

//componants
import SparepartDetails from '../components/SparepartDetails'
import SparepartForm from '../components/SparepartForm'

const Home = () => {
    const {spareParts, dispatch} = useSparepartContext()

    useEffect(() => {
        const fetchSpareparts = async () => {
            const response = await fetch('/api/spareParts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_SPAREPARTS', payload: json})
            }
        }

        fetchSpareparts()
    },) // This is the path to the backend

    return (
        <div className="home">
            <div className="workouts">
                {spareParts && spareParts.map((SparePart) => (
                    <SparepartDetails key={SparePart._id} SparePart = {SparePart}/>
                ))}
            </div>
            <SparepartForm />
        </div>
    )
}

export default Home