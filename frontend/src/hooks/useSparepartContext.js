import {SparepartContext} from '../context/SparepartContext'
import {useContext} from 'react'

export const useSparepartContext = () => {
    const context = useContext(SparepartContext)

    if(!context) {
        throw Error('useSparepartContext must be used within a SparepartContextProvider')
    }

    return context
}