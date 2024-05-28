import { baseApi } from "./baseApi";

const donorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonor: build.query({
      query: (queryFilter) => {
        const qs = Object.keys(queryFilter)
          .map((key) => {
            if (encodeURIComponent(queryFilter[key])) {
              return `${encodeURIComponent(key)}=${encodeURIComponent(
                queryFilter[key]
              )}`;
            }
          })
          .join("&");

        return {
          url: `/donor-list/?${qs}`,
          method: "GET",
          contentType: "multipart/form-data",
        };
      },
    }),
    getSingleDonor: build.query({
      query: (donorId) => ({
        url: `/donor/${donorId}`,
        method: "GET",
        contentType: "multipart/form-data",
      }),
    }),
    createBloodRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const {
  useGetAllDonorQuery,
  useGetSingleDonorQuery,
  useCreateBloodRequestMutation,
} = donorApi;
