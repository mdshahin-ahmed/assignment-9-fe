"use client";

import { bloodTypeSelect } from "@/constants/donorConst";
import logo from "@/assets/logo-primary.png";
import BloodCheckBox from "@/components/Forms/BloodCheckBox";
import BloodForm from "@/components/Forms/BloodForm";
import BloodInput from "@/components/Forms/BloodInput";
import BloodSelect from "@/components/Forms/BloodSelect";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { registerPatient } from "@/services/actions/registerPatient";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/authServices";

const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters!"),
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please provide a valid email address!"),
  bloodType: z.string().min(1, "Please enter your Blood Type!"),
  location: z.string().min(1, "Please enter your location!"),
  availability: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
  bio: z.string().min(1, "Please enter your bio"),
});

const defaultValues = {
  password: "",
  name: "",
  email: "",
  bloodType: "",
  location: "",
  availability: false,
  bio: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    try {
      const res = await registerPatient(values);
      if (res?.data?.id) {
        bloodToast("success", res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push(`/dashboard/${result?.data?.role.toLowerCase()}`);
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          margin: "100px 0px",
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
            padding: 4,
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
              <Image src={logo} width={150} alt="Logo" />
            </Box>
            <Box>
              <Typography mt={2} variant="h6" fontWeight={600}>
                Registration with Blood Donation
              </Typography>
            </Box>
          </Stack>
          <Box>
            <BloodForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <BloodInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="password"
                    label="Password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodSelect
                    label="Blood type"
                    name="bloodType"
                    options={bloodTypeSelect}
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="text"
                    label="location"
                    fullWidth={true}
                    name="location"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="text"
                    label="Bio"
                    fullWidth={true}
                    name="bio"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodCheckBox
                    label="Are you available for donate"
                    name="availability"
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
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?
                <Link href="/login">
                  <span className="color-primary">Login</span>
                </Link>
              </Typography>
            </BloodForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
