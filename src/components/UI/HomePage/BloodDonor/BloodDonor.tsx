"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import DonorFilter from "../../Donor/DonorFilter";
import { useState } from "react";
import DonorCard from "../../Donor/DonorCard";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";

const BloodDonor = () => {
  const [defaultValues, setDefaultValues] = useState({
    bloodType: "",
    availability: "",
    location: "",
    searchTerm: "",
  });
  console.log(defaultValues);

  const cardArr = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

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
          {cardArr?.length > 0 &&
            cardArr?.map((donor) => (
              <Grid key={donor.id} item md={4}>
                <DonorCard />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BloodDonor;
