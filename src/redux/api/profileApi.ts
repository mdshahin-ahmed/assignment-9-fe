import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: `/my-profile`,
        method: "GET",
        contentType: "multipart/form-data",
      }),
      providesTags: ["profile"],
    }),
    updateMyProfile: build.mutation({
      query: (data) => ({
        url: "/my-profile",
        method: "PUT",
        data,
      }),
      invalidatesTags: ["profile"],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "PUT",
        data,
      }),
    }),
    myBloodRequest: build.query({
      query: () => ({
        url: `/blood-request`,
        method: "GET",
        contentType: "multipart/form-data",
      }),
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useChangePasswordMutation,
  useMyBloodRequestQuery,
} = profileApi;
