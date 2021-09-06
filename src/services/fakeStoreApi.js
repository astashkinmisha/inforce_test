import {addProduct, getProducts} from "../redux/actionCreators/actionCreator";

export const getAllProducts = () => {
    return dispatch => {
        fetch('https://fakestoreapi.com/products')
            .then(value => value.json())
            .then(value => dispatch(getProducts(value)))
    }
}

export const addNewProduct = (product) => (dispatch) => {
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(product)
    })
        .then(res=>res.json())
        .then(json=> {console.log(json)
            dispatch(addProduct(json))
        })
}
export const editProduct = (product) => (dispatch) => {
    fetch(`https://fakestoreapi.com/products/${product.id}`,{
        method:"PUT",
        body:JSON.stringify(product)
    })
        .then(res=>res.json())
        .then(json=> {
            dispatch()
            console.log(json)
        })
}
