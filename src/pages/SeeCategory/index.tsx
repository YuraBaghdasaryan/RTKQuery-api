import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetCategoriesByIDQuery,
  useUpdateCategoryMutation,
} from "../../features/api";
import { Category } from "../../features/type";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
});

export const SeeCategory: React.FC = React.memo(() => {
  const { id } = useParams<{ id: any }>();
  const { data, error, isLoading } = useGetCategoriesByIDQuery("" + id);
  const [ubdateCategory, { isLoading: isUpdating }] =
    useUpdateCategoryMutation();
  const initialValues = {
    ...data,
    name: data?.name || "",
  };
 const handleSubmit = async (values: Category) => {
    try {
      await ubdateCategory({
        id: id,
        data: values,
      }).unwrap();
    } catch (error) {
      console.log("Error updating category:", error);
    }
  };
  return (
    <div>
      <h1>See Category</h1>
      <div>
        <h1>{data?.name}</h1>
        <img src={data?.image} width={"200"} />
      </div>
      {isLoading && <p>Loading...</p>}
      {data && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <form>
            <label htmlFor="name">Name</label>
            <input 
            className="form-control" 
            type="text" 
            id="name" 
            name="name"
             />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={isUpdating}>
              Update Category
            </button>
          </form>
        </Formik>
      )}
    </div>
  );
});
