import { useState } from 'react'
import { useSparepartContext } from '../hooks/useSparepartContext'

const SparepartForm = () => {
    const { dispatch } = useSparepartContext()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const SparePart = { name, price, discount, description}

        //Fetch request to POST a new workout
        const response = await fetch('/api/spareParts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(SparePart)
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setPrice('')
            setDiscount('')
            setDescription('')
            setError(null)
            console.log('New sparepart added', json)
            dispatch({type: 'CREATE_SPAREPART', payload: json})
        }

    }

    return (
        <form className = 'create' onSubmit={handleSubmit}>
            <h3>Add a New Sparepart</h3>
            <label>Name: </label>
            <input type="text"
                   value={name} 
                   onChange={(e) => setName(e.target.value)}
            />
            <label>Price: </label>
            <input type="number"
                   value={price} 
                   onChange={(e) => setPrice(e.target.value)}
            />
            <label>Discount: </label>
            <input type="number"
                   value={discount}
                   onChange={(e) => setDiscount(e.target.value)}
            />
            <label>Description: </label>
            <input type="text"
                   value={description} 
                   onChange={(e) => setDescription(e.target.value)}
            />

            <button>Add Sparepart</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default SparepartForm
