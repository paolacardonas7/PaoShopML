import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Product from "./Product";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

const PRODUCT_API_URL = "https://api.mercadolibre.com/sites/MCO/search?q=motorola";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(PRODUCT_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_PRODUCTS_SUCCESS",
        payload: jsonResponse.data.results

      });
    });
  }, []);


  const search = searchValue => {
    dispatch({
      type: "SEARCH_PRODUCTS_REQUEST"
    });

    axios(`https://api.mercadolibre.com/sites/MCO/search?q=${searchValue}`).then(
      jsonResponse => {
        dispatch({
          type: "SEARCH_PRODUCTS_SUCCESS",
          payload: jsonResponse.data.results
        });
      }
    );
  };

  const { products, errorMessage, loading } = state;

  const retrievedProducts =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
          products.map((product, index) => (
            <Product key={`${index}-${product.title}`} product={product} />
          ))
        );

  return (
    <div className="App">
      <div className="m-container">
        <Header text="PaoShop" />

        <Search search={search} />

        <p className="App-intro">Encuentra lo que necesites</p>

        <div className="products">{retrievedProducts}</div>
      </div>
    </div>
  );
};

export default App;
