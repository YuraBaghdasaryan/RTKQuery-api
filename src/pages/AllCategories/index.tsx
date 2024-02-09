import React from "react";
import { useGetCategoriesQuery } from "../../features/api";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./style.scss";



export const AllCategories: React.FC = React.memo(() => {
  const { data } = useGetCategoriesQuery("");
  return (
    <div className="d5">
      <h1>All Categories</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>name</th>
            <th>image</th>
            <th>See Category</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((elm: any) => {
            return (
              <tr key={elm.id}>
                <td>{elm.name}</td>
                  <td>
                    <img src={elm.image} width={200} />
                  </td>
                  <td>
                    <Link to={"/see-category/" +elm.id}>SeeCategory</Link>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
