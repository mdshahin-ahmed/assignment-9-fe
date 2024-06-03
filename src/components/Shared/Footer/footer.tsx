import { Box, Container, Stack, Typography } from "@mui/material";

import Link from "next/link";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import linkedin from "@/assets/linkedin.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Box bgcolor="#ff0066" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
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
            justifyContent: "center",
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
          <Typography component="p" color="white">
            Privacy Policy! Teams & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
