import { Box, Button, Container, Grid, Typography } from "@mui/material";
import aboutImage from "@/assets/about.jpg";
import Image from "next/image";
const AboutUs = () => {
  return (
    <Container
      sx={{
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Grid container spacing={10}>
        <Grid item md={6}>
          <Box
            sx={{
              borderRadius: "20px",
            }}
          >
            <Image width={500} src={aboutImage} alt="Hero" />
          </Box>
        </Grid>
        <Grid item md={6} alignSelf="center">
          <Typography variant="h4" fontWeight={700}>
            About Us
          </Typography>
          <Typography variant="h6" mt={4} textAlign="justify">
            At LifeStream Blood Donation, our mission is to ensure a safe and
            sufficient blood supply for all who need it. We are committed to
            saving lives through community engagement, education, and the
            promotion of voluntary blood donation.
          </Typography>
          {/* <Button
            sx={{
              mt: "50px",
            }}
            className="btn-primary"
          >
            See More
          </Button> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
