// Déclaration de l'état initial
const initialState = {
    name: ""
}

// Création du reducer
function nameReducer(state = initialState, action) {
	switch(action.type) {
        case 'UPDATE':
            return {
                ...state, 
                name: action.payload
            }
        default:
            return state
    }
}

export default nameReducer