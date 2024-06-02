import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
