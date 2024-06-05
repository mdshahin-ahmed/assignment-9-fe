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
import Dhaka from "@/assets/dhaka.png";
import Tangail from "@/assets/tangail.png";
import Narsingdi from "@/assets/narsingdi.png";
import Image from "next/image";

const coverageAreaList = [
  {
    id: 1,
    name: "Dhaka",
    image: Dhaka,
  },
  {
    id: 2,
    name: "Tangail",
    image: Tangail,
  },
  {
    id: 3,
    name: "Narsingdi",
    image: Narsingdi,
  },
];

const CoverageArea = () => {
  return (
    <Container>
      {/* Header section  */}
      <Box className="heading" display="flex" justifyContent="center" mb={4}>
        <SectionHeader heading="Coverage Area" />
      </Box>
      <Grid container spacing={3}>
        {coverageAreaList.map((area) => (
          <Grid key={area.id} item md={4}>
            <Card>
              <Image src={area.image} alt={area.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {area.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoverageArea;
