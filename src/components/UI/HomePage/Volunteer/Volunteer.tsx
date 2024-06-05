"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Founder from "@/assets/founder.webp";
import CoFounder from "@/assets/co-founder.webp";
import Manager from "@/assets/manager.webp";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";

const volunteerList = [
  {
    id: 1,
    name: "MELISSA MUNOZ",
    image: Founder,
    role: "FOUNDER",
    facebook: "https://www.facebook.com/",
    instagram: "https://https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 2,
    name: "ALEXANDER GARY",
    image: CoFounder,
    role: "CO-FOUNDER",
    facebook: "https://www.facebook.com/",
    instagram: "https://https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "JOHN ABRAHAM",
    image: Manager,
    role: "MANAGER",
    facebook: "https://www.facebook.com/",
    instagram: "https://https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

const Volunteer = () => {
  return (
    <Container>
      {/* Header section  */}
      <Box className="heading" display="flex" justifyContent="center" mb={4}>
        <SectionHeader heading="Our Volunteers" />
      </Box>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
        }}
      >
        The volunteers who give their time and talents help to fulfill our
        mission.
      </Typography>
      <Grid container spacing={3}>
        {volunteerList.map((volunteer) => (
          <Grid key={volunteer.id} item md={4}>
            <Card
              sx={{
                my: 4,
              }}
            >
              <Image src={volunteer.image} alt={volunteer.name} />
              <CardContent>
                <Typography
                  gutterBottom
                  fontWeight="bold"
                  variant="h5"
                  component="div"
                >
                  {volunteer.name}
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  {volunteer.role}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    justifyContent: "center",
                  }}
                >
                  <Box
                    mr={3}
                    component={Link}
                    href={volunteer.facebook}
                    target="_blank"
                  >
                    <Image
                      width={50}
                      height={50}
                      src={facebook}
                      alt="facebook"
                    />
                  </Box>
                  <Box
                    mr={3}
                    component={Link}
                    href={volunteer.instagram}
                    target="_blank"
                  >
                    <Image
                      width={50}
                      height={50}
                      src={instagram}
                      alt="instagram"
                    />
                  </Box>
                  <Box
                    mr={3}
                    component={Link}
                    href={volunteer.linkedin}
                    target="_blank"
                  >
                    <Image
                      width={50}
                      height={50}
                      src={linkedin}
                      alt="linkedin"
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Volunteer;
