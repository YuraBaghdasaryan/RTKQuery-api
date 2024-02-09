import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCategoriesByIDQuery,
  useGetCategoriesQuery,
  useGetProductsByIdQuery,
  useUpdateProductMutation,
} from "../../features/api";
import { Product } from "../../features/type";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number().required("Price is required"),
});

export const SeeProduct: React.FC = React.memo(() => {
  const { id } = useParams<{ id: any }>();
  const { data, error, isLoading } = useGetProductsByIdQuery("" + id);
const [updateProduct, { isLoading: isUpdating }] =
 useUpdateProductMutation();
 const initialValues = {
    ...data,
    title: data?.title || "",
    price: data?.price || "",
  };
  const handleSubmit = async (values: Product) => {
    try {
      await updateProduct({
        id: id,
        data: values,
      }).unwrap();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>See Product</h1>
      <div>
        <h1>{data?.title}</h1>
        <h1>{data?.price}</h1>
        <h1>{data?.description}</h1>
        <img src={data?.images} width={"200"} />
        <h1>{data?.category.name}</h1>
      </div>
      {data && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form>
            <div>
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                type="text"
                id="title"
                name="title"
              />
              <ErrorMessage name="title" component="div" />
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                className="form-control"
                type="string"
                id="price"
                name="price"
              />
              <ErrorMessage name="price" component="div" />
            </div>

            <button type="submit" disabled={isUpdating}>
              Update Product
            </button>
          </form>
        </Formik>
      )}
    </div>
  );
});

export default SeeProduct;
