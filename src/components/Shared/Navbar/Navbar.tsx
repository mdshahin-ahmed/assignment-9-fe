"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Box className="bg-primary">
      <Container className="bg-primary colorWhite">
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component={Link} href="/">
            <Image width={100} height={60} src={logo} alt="Logo" />
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Typography className="colorWhite" component={Link} href="/">
              Home
            </Typography>
            <Typography className="colorWhite" component={Link} href="/donors">
              Donors
            </Typography>
            <Typography className="colorWhite" component={Link} href="/about">
              About Us
            </Typography>

            <AuthButton />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
