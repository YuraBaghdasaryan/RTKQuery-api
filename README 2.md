  UpdateCategory: builder.mutation({
      query: ({id, data}:{id: any, data:Category}) => ({
        url: `categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),