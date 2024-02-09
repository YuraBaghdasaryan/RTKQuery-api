import React from "react";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "../../features/api";
import { useAppDispatch } from "../../app/hooks";
import * as Yup from "yup";
import { ErrorMessage, Formik } from "formik";
import "./style.scss";

const object = Yup.object({
  title: Yup.string().required(),
  price: Yup.number().required().positive().min(0).max(100),
  description: Yup.string().required(),
  categoryId: Yup.number().required().positive().min(0).max(100),
  images: Yup.string().url(),
});

export const CreateProducts: React.FC = React.memo(() => {
  const [createProduct] = useCreateProductMutation();
  const { data, error, isLoading } = useGetCategoriesQuery("");
  const initialValues = {
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: "",
  };

  const handleSubmit = async (data: any) => {
    console.log(data);
    const arr = await createProduct({...data, images:[data.images]}).unwrap();
    console.log(arr);
  };

  return (
    <div>
      <h1>Create Product</h1>

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
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="inp1"
              placeholder="title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && <p>{errors.title}</p>}

            <input
              type="text"
              className="inp2"
              placeholder="price"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.price && touched.price && <p>{errors.price}</p>}

            <input
              type="text"
              className="inp3"
              placeholder="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description && (
              <p>{errors.description}</p>
            )}
            <input
              type="text"
              placeholder="images"
              className="inp5"
              name="images"
              value={values.images}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.images && touched.images && <p>{errors.images}</p>}
            <select
              className="select"
              name="categoryId"
              value={values.categoryId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {data?.map((elm: any) => {
                return (
                  <option key={elm.id} value={elm.id}>
                    {elm.name}
                  </option>
                );
              })}
            </select>
            <button className="btn2" type="submit">
              Click
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
});


/***
 * 
 * 
 * xampp
 * navicat
 * 
 */
