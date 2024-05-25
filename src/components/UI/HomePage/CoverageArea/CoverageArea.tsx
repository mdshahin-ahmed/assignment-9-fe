import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

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

const CoverageArea = () => {
  return (
    <Container>
      {/* Header section  */}
      <Box className="heading" display="flex" justifyContent="center" mb={4}>
        <SectionHeader heading="Coverage Area" />
      </Box>
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
                Shahin
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CoverageArea;
