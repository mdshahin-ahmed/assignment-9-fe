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
    bloodRequestToMe: build.query({
      query: () => ({
        url: `/donation-request`,
        method: "GET",
        contentType: "multipart/form-data",
      }),
      providesTags: ["requestStatus"],
    }),
    createBloodRequest: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data,
      }),
    }),
    updateDonationRequest: build.mutation({
      query: ({ id, data }) => ({
        url: `/donation-request/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["requestStatus"],
    }),
  }),
});

export const {
  useGetAllDonorQuery,
  useGetSingleDonorQuery,
  useCreateBloodRequestMutation,
  useBloodRequestToMeQuery,
  useUpdateDonationRequestMutation,
} = donorApi;
