"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { useGetAllDonorQuery } from "@/redux/api/donorApi";
import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DonorCard, { TDonor } from "../../Donor/DonorCard";
import DonorFilter from "../../Donor/DonorFilter";
import noData from "@/assets/no-data.png";

const BloodDonor = () => {
  const [defaultValues, setDefaultValues] = useState({
    bloodType: "",
    availability: "",
    searchTerm: "",
  });

  const { data, isFetching } = useGetAllDonorQuery(defaultValues);

  return (
    <Container>
      {/* Header section  */}
      <Box className="heading" display="flex" justifyContent="center" mb={4}>
        <SectionHeader heading="Search Blood Donor" />
      </Box>
      {/*  Filter section */}
      <DonorFilter
        defaultValues={defaultValues}
        setDefaultValues={setDefaultValues}
      />
      {/* Card section */}

      <Box
        sx={{
          margin: "50px 0px",
        }}
      >
        <Grid container spacing={3}>
          {data?.data?.length > 0 && !isFetching ? (
            <>
              {data?.data?.map((donor: TDonor) => (
                <Grid key={donor.id} item md={4} sx={{ width: "100%" }}>
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
    </Container>
  );
};

export default BloodDonor;
