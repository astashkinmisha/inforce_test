import {ADD_PRODUCT, GET_PRODUCTS} from "../actionTypes/actionTypes";

export const getProducts = (value) =>  {
    return {type: GET_PRODUCTS, payload: value};
}

export const addProduct = (value) => {
    return {type: ADD_PRODUCT, payload: value}
}

export const editChoosenProduct = () => {

}
