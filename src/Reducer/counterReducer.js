// Déclaration de l'état initial
const initialState = {
    counter: 0
}

// Création du reducer
function counterReducer(state = initialState, action) {
	switch(action.type) {
        case 'INCREMENTE':
            return {
                ...state, 
                counter: state.counter + 1
            }  
        case 'DECREMENTE':
            return {
                ...state, 
                counter: state.counter - 1
            }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export default counterReducer