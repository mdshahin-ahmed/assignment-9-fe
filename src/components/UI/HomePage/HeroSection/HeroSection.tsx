import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroImage from "@/assets/hero.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container
      sx={{
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Grid container spacing={10}>
        <Grid item md={6} alignSelf="center">
          <Typography variant="h4" fontWeight={700}>
            Donate Blood - Save Lives
          </Typography>
          <Typography variant="h6" mt={4} textAlign="justify">
            Join our community of life-savers. Every donation has the power to
            give someone a second chance. Whether it’s for accident victims,
            surgeries, or patients with chronic illnesses, your contribution is
            invaluable.
          </Typography>
          <Button
            sx={{
              mt: "50px",
            }}
            className="btn-primary"
          >
            Search Donors
          </Button>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              borderRadius: "20px",
            }}
          >
            <Image src={heroImage} alt="Hero" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
