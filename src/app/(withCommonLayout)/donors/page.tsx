"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { useGetAllDonorQuery } from "@/redux/api/donorApi";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import noData from "@/assets/no-data.png";
import DonorCard, { TDonor } from "@/components/UI/Donor/DonorCard";
import DonorFilter from "@/components/UI/Donor/DonorFilter";

const DonorPage = () => {
  const [defaultValues, setDefaultValues] = useState({
    page: 1,
    bloodType: "",
    availability: "",
    searchTerm: "",
  });

  const { data, isFetching } = useGetAllDonorQuery(defaultValues);

  const handlePagination = (e: any, value: number) => {
    setDefaultValues({ ...defaultValues, page: value });
  };

  return (
    <Container>
      {/* Header section  */}
      <Box className="heading" display="flex" justifyContent="center" my={4}>
        <SectionHeader heading="Search Blood Donor" />
      </Box>
      {/*  Filter section */}
      <DonorFilter
        defaultValues={defaultValues}
        setDefaultValues={setDefaultValues}
      />
      {/* Card section */}

      <Box className="heading" display="flex" justifyContent="center" my={4}>
        <SectionHeader heading="Total Donors Found" count={data?.meta?.total} />
      </Box>

      <Box
        sx={{
          margin: "50px 0px",
        }}
      >
        <Grid container spacing={3}>
          {data?.data?.length > 0 && !isFetching ? (
            <>
              {data?.data?.map((donor: TDonor) => (
                <Grid key={donor.id} item md={4}>
                  <DonorCard donor={donor} />
                </Grid>
              ))}
            </>
          ) : (
            <>
              {!isFetching && (
                <Box
                  sx={{
                    margin: "0 auto",
                  }}
                >
                  <Image height={400} width={600} src={noData} alt="no data" />
                </Box>
              )}
              {isFetching && (
                <Grid container spacing={3}>
                  <Grid item md={4}>
                    <Skeleton variant="rectangular" height={200} />
                  </Grid>
                  <Grid item md={4}>
                    <Skeleton variant="rectangular" height={200} />
                  </Grid>
                  <Grid item md={4}>
                    <Skeleton variant="rectangular" height={200} />
                  </Grid>
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" my={4}>
        <Pagination
          color="secondary"
          count={Math.ceil(data?.meta?.total / 10) || 1}
          page={defaultValues.page}
          onChange={handlePagination}
        />
      </Box>
    </Container>
  );
};

export default DonorPage;
