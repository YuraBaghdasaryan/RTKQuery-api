import React from "react";
import { useRoutes } from "react-router-dom";
import { AllCategories } from "../pages/AllCategories";
import { AllProduct } from "../pages/AllProduct";
import { CreateCategory } from "../pages/CreateCategory";
import { CreateProducts } from "../pages/CreateProducts";
import { SeeProduct } from "../pages/SeeProduct";
import { SeeCategory } from "../pages/SeeCategory";

export const MyRouter:React.FC=React.memo(()=>{
    const router=useRoutes([
       {path:"/AllCategories",element:<AllCategories/>},
       {path:"/AllProducts",element:<AllProduct/>},
       {path:"/CreateProducts",element:<CreateProducts/>},
       {path:"/CreateCategory",element:<CreateCategory/>},
       {path:"/see-product/:id",element:<SeeProduct/>},
       {path:"/see-category/:id",element:<SeeCategory/>}
    ])
    return router
})