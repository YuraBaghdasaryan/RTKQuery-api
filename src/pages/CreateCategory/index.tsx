import React, { useState } from "react";
import { Formik } from "formik";
import "./style.scss";


import {
  useCreateCategoryMutation,
  useCreateProductMutation,
} from "../../features/api";
import { useAppDispatch } from "../../app/hooks";
import * as Yup from "yup";

const object = Yup.object({
  name: Yup.string().required("name is required"),
  image: Yup.string().url(),
});
export const CreateCategory: React.FC = React.memo(() => {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const initialValues = {
    name: "",
    image: "",
  };
  const handleSubmit = async (data: any) => {
    console.log(data);
    const arr = await createCategory(data).unwrap();
    console.log(arr);
  };
  return (
    <div>
      <h1>Create Categories</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={object}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <form action="" className="form1" onSubmit={handleSubmit}>
            <input
              className="inp1"
              type="text"
              placeholder="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <p>{errors.name}</p>}
            <input
              type="text"
              placeholder="image"
              className="inp2"
              value={values.image}
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.image && touched.image && <p>{errors.image}</p>}
            <button className="btn1" type="submit">
              Click
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
});
