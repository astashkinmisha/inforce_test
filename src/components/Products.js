import {addNewProduct} from "../services/fakeStoreApi";
import {useState} from "react";
import Product from "./Product";

export default function Products ({dispatch, product}){
    // let {title, description, category, image} = product;
    console.log(product);

    let [products, setProducts] = useState({id: '',title: '', description: '', category: ''});

    let handleOnChaneEvent = (event) => {
        setProducts({...product, [event.target.name]: event.target.value})
        console.log(product);
    };
    let handleOnSubmitProduct = (event) => {
        event.preventDefault();
        dispatch(addNewProduct(product))
    };
    return (

        <div>
            <form onSubmit={handleOnSubmitProduct}>
                <input type="text" name={'title'} value={product.title} onChange={handleOnChaneEvent}/>
                <input type="text" name={'description'} value={product.description} onChange={handleOnChaneEvent}/>
                <input type="text" name={'category'} value={product.category} onChange={handleOnChaneEvent}/>
                <button>add new product</button>
                {
                    product.map(value => <Product key={value.id} product={value}/>)
                }
            </form>
        </div>
    );
}
