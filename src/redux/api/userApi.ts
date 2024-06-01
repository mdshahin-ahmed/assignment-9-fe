import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: `/users`,
        method: "GET",
        contentType: "multipart/form-data",
      }),
      providesTags: ["profile"],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
