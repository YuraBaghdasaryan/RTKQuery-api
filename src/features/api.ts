import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "./type";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  tagTypes: ["Prod", "Category"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, string>({
      query: () => "products",
      providesTags: () => [{ type: "Prod", id: "LIST" }],
    }),

    getProductsById: builder.query({
      query: (id: any) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),

    deleteProductById: builder.mutation({
      query: (id: number) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Prod", id: "LIST" }],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: `products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Prod", id: "List" }],
    }),
    updateProduct: builder.mutation({
      query: ({id, data}:{id: any, data:Product}) => ({
        url: `products${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Prod", id: "List" }],
    }),
    paginationProduct: builder.mutation({
      query: (limit = "") => `pagination?${limit && `_limit=${limit}`}`,
    }),

    getCategories: builder.query<any, string>({
      query: () => "categories",
      providesTags: () => [{ type: "Category", id: "catId" }],
    }),
    getCategoriesByID: builder.query({
      query: (id: any) => ({
        url: `categories/${id}`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: `categories`,
        method: "POST",
        body: data
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
    UpdateCategory: builder.mutation({
      query: ({id, data}:{id: any, data:Category}) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
    deleteCategoryById: builder.mutation({
      query: (id: number) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductByIdMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  usePaginationProductMutation,
  useGetCategoriesQuery,
  useGetCategoriesByIDQuery,
  useGetProductsByIdQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryByIdMutation,
  useLazyGetCategoriesQuery,
  useCreateCategoryMutation,
} = api;
