import { Box, Container, Stack, Typography } from "@mui/material";

import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="#ff0066" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#ffffff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#ffffff">Health Plans</Typography>
          <Typography color="#ffffff">Medicine</Typography>
          <Typography color="#ffffff">Diagnostics</Typography>
          <Typography color="#ffffff">NGOs</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" py={3} gap={2}>
          {/* <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" /> */}
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
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
