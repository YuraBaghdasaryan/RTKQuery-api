import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useGetProductsQuery } from "../../features/api";
import { Link } from "react-router-dom";

export const AllProduct: React.FC = React.memo(() => {
    const {data , error , isLoading} = useGetProductsQuery('')
    return(
        <div>
        <h1>All Product</h1>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th>title</th>
                    <th>price</th>
                    <th>description</th>
                    <th>Category Name</th>
                    <th>images</th>
                    <th>See</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((elm:any)=>{
                    return(
                        <tr key={elm.id}>
                          <td>{elm.title}</td>
                          <td>{elm.price}</td>
                          <td>{elm.description}</td>
                          <td>{elm.category.name}</td>
                           <td>
                            <img src={elm.images} width={200} height={200}/>
                           </td>
                           <td>
                            <Link to={'/see-product/' +elm.id}>See Product</Link>
                           </td>
                          
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        </div>
    )
})