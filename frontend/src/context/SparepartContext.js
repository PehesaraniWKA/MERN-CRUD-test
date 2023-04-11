import { createContext, useReducer} from "react"

export const SparepartContext = createContext()

// Path: frontend\src\context\WorkoutContext.js

export const sparepartsReducer = (state, action) => {

    switch (action.type) {
        case 'SET_SPAREPARTS':
            return {
                spareParts: action.payload
            }
        case 'CREATE_SPAREPART':
            return {
                spareParts: [action.payload, ...state.spareParts] /*payload is the new workout object that we want to add to the array 
                                                                of workouts & ...state.workouts is the pre workout*/
            }
        case 'DELETE_SPAREPART':
            return { 
                spareParts: state.spareParts.filter(SparePart => SparePart._id !== action.payload._id) /*payload is the deleted workout object that 
                                                                                                we want to remove from the array*/
            }
        case 'UPDATE_SPAREPART':
            return {
                spareParts: state.spareParts.map(SparePart =>SparePart._id === action.payload._id 
                                                 ? action.payload : SparePart) /*payload is the updated spareParts object 
                                                                               that we want to replace in the array of spareParts*/
            }
        /*case 'SET_SPAREPART_BY_ID':
            return {
                spareParts: [action.payload]
            }*/
        
        default:
            return state;
    }
}

export const SparepartContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(sparepartsReducer, {
        spareParts: null
    })

    return (
        <SparepartContext.Provider value={{...state,dispatch}}>
            {children}
        </SparepartContext.Provider>
    )
}