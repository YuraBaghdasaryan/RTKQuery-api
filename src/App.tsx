import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useCreateProductMutation,
  useDeleteProductByIdMutation,
  useGetProductsQuery,
} from "./features/api";
import { BrowserRouter } from "react-router-dom";
import { MyRouter } from "./router/MyRouter";
import { Menu } from "./component/Menu";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Menu/>
    <MyRouter/>
    </BrowserRouter>
    
  </div>;
}

export default App;
