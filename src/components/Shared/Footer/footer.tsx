import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Link from "next/link";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <Box bgcolor="#ff0066" py={5}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6} sx={{ width: "100%" }}>
            <Typography variant="body1" className="cardTypography colorWhite">
              <EmailIcon className="colorWhite cardIcon" />
              blood@yopmail.com
            </Typography>
            <Typography
              variant="body1"
              my={2}
              className="cardTypography colorWhite"
            >
              <LocalPhoneIcon className="colorWhite cardIcon" />
              +8801622006057
            </Typography>
            <Typography variant="body1" className="cardTypography colorWhite">
              <LocationOnIcon className="colorWhite cardIcon" />
              Dhaka, Bangladesh.
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            <Stack direction="row" gap={4}>
              <Typography component={Link} href="/donors" color="#ffffff">
                Donors
              </Typography>
              <Typography component={Link} href="/about" color="#ffffff">
                About Us
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "flex",
                my: 3,
              }}
            >
              <Box
                mr={3}
                component={Link}
                href={"https://www.facebook.com/"}
                target="_blank"
              >
                <Image width={50} height={50} src={facebook} alt="facebook" />
              </Box>
              <Box
                mr={3}
                component={Link}
                href={"https://https://www.instagram.com/"}
                target="_blank"
              >
                <Image width={50} height={50} src={instagram} alt="instagram" />
              </Box>
              <Box
                mr={3}
                component={Link}
                href={"https://www.linkedin.com/"}
                target="_blank"
              >
                <Image width={50} height={50} src={linkedin} alt="linkedin" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          py={3}
          gap={2}
        >
          <Typography component="p" color="white">
            &copy; 2024 Blood. All Rights Reserved.
          </Typography>
          <Typography
            color="white"
            component={Link}
            href="/"
            variant="h4"
            fontWeight={600}
          >
            Blood
          </Typography>
          <Typography
            component={Link}
            href={"https://www.google.com/"}
            target="_blank"
            color="white"
          >
            Privacy Policy! Teams & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
