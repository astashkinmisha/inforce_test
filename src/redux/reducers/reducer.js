import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS} from "../actionTypes/actionTypes";

let initialState = {products: []};
export const reducer = (state = initialState, action ) => {
    console.log(action);
    switch(action.type) {
        case GET_PRODUCTS :{
            return {...state, products:action.payload}
        }
        case ADD_PRODUCT : {
            return {...state, products: [...state.products, action.payload]}
        }
        case EDIT_PRODUCT : {
            return {...state, products: [...action.payload]}
        }
        case DELETE_PRODUCT : {
            return {...state}
        }
        default:
            return state;

    }
}
