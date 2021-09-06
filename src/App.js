
import './App.css';
import {useEffect, useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "./services/fakeStoreApi";
import Products from "./components/Products";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Product from "./components/Product";




function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();

useEffect(()=> dispatch(getAllProducts()), [dispatch])
    const {products} = state
    console.log(products);


    return (
        <Router>
    <div>
    <Products product={products} dispatch={dispatch}/>
    </div>
        </Router>
  );
}

export default App ;
