import { store } from "../stores/dogStore";


 const dogPageReducer = (state = store, action) => {
    switch (action.type) {
        case 'SHOW_DOGS':
            return {
                ...state,
                dogs: [action.payload]
            }
        default:
            return state
        }
    }
    

export default dogPageReducer;