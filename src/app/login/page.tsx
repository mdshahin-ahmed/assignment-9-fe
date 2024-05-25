"use client";

import logo from "@/assets/logo-primary.png";
import BloodForm from "@/components/Forms/BloodForm";
import BloodInput from "@/components/Forms/BloodInput";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    console.log(values);
    bloodToast("error", "Successfully!");

    // console.log(values);
    // try {
    //   const res = await userLogin(values);
    //   if (res?.data?.accessToken) {
    //     toast.success(res?.message);
    //     storeUserInfo(res?.data?.accessToken);
    //     router.push("/dashboard");
    //   } else {
    //     setError(res.message);
    //     // console.log(res);
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 8,
            textAlign: "center",
            bgcolor: "#f9d7dd",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image width={150} src={logo} alt="Logo" />
            </Box>
            <Box>
              <Typography mt={2} variant="h6" fontWeight={600}>
                Login With Blood
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <BloodForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <BloodInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                    // required={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="password"
                    label="Password"
                    fullWidth={true}
                    name="password"
                    // required={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                className="btn-primary"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?
                <Link href="/register">
                  <span className="color-primary ml-2">Create an account</span>
                </Link>
              </Typography>
            </BloodForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
