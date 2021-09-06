
import './App.css';
import {useEffect, useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "./services/fakeStoreApi";
import Products from "./components/Products";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Product from "./components/Product";




function App() {


    let state = useSelector(state => state);
    const {products} = state
    let dispatch = useDispatch();
    console.log(products);

useEffect(()=> dispatch(getAllProducts()), [dispatch])
    return (
        <Router>
    <div>

        <Link to={'/products/'}> Products </Link>
        {/*<Link to={'/product/'}> Product </Link>*/}

        {/*<Products dispatch={dispatch} product={products}/>*/}

    </div>

           <Route path={'/products/'} component={<Products dispatch={dispatch} product={products}/>} />
            {/*<Route path={'/product/'} component={<Product key={value.id} products={value}/>} />*/}
         </Router>
  );
}

export default App ;
