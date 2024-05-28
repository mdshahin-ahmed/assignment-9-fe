import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: `/my-profile`,
        method: "GET",
        contentType: "multipart/form-data",
      }),
    }),
  }),
});

export const { useGetMyProfileQuery } = profileApi;
