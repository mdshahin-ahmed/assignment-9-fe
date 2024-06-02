"use client";

import logo from "@/assets/logo-primary.png";
import BloodForm from "@/components/Forms/BloodForm";
import BloodInput from "@/components/Forms/BloodInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useChangePasswordMutation } from "@/redux/api/profileApi";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";

const passwordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, "Old password must be at least 6 characters long"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and Confirm password don't match",
    path: ["confirmPassword"], // This indicates where the error message should appear
  });

const ChangePasswordPage = () => {
  const [changePassword] = useChangePasswordMutation();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await changePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      }).unwrap();

      if (res?.id) {
        bloodToast("success", "User profile updated successfully");
      } else {
        bloodToast("error", "Password incorrect!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "80vh",
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
                Login with Blood Donation
              </Typography>
            </Box>
          </Stack>

          <Box>
            <BloodForm
              onSubmit={handleLogin}
              resolver={zodResolver(passwordSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <BloodInput
                    label="Old password"
                    type="password"
                    fullWidth={true}
                    name="oldPassword"
                    // required={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="password"
                    label="New password"
                    fullWidth={true}
                    name="newPassword"
                    // required={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="password"
                    label="Confirm password"
                    fullWidth={true}
                    name="confirmPassword"
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
                Change Password
              </Button>
            </BloodForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;
