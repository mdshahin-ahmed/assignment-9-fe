"use client";

import logo from "@/assets/logo-primary.png";
import BloodCheckBox from "@/components/Forms/BloodCheckBox";
import BloodForm from "@/components/Forms/BloodForm";
import BloodInput from "@/components/Forms/BloodInput";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";
import { useCreateBloodRequestMutation } from "@/redux/api/donorApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  donorId: z.string(),
  phoneNumber: z.string().min(1, "Please enter your Phone number!"),
  dateOfDonation: z.string().min(1, "Please provide a date of donation!"),
  hospitalName: z.string().min(1, "Please enter Hospital name!"),
  hospitalAddress: z.string().min(1, "Please enter your hospital address!"),
  reason: z.string().min(1, "Please enter the reason"),
  termsAndCondition: z.literal(true),
});

const BloodRequestPage = ({ params }: { params: { id: string } }) => {
  const [createBloodRequest] = useCreateBloodRequestMutation();

  const handleRegister = async (values: FieldValues) => {
    console.log(values);

    // try {
    //   const res = await createBloodRequest(values).unwrap();
    //   console.log(res);

    //   if (res?.id) {
    //     bloodToast("success", "Request successfully made");
    //   }
    // } catch (err: any) {
    //   console.error(err.message);
    // }
  };

  const defaultValues = {
    donorId: params?.id,
    phoneNumber: "",
    dateOfDonation: "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
    termsAndCondition: false,
  };

  return (
    <Container>
      <Stack
        sx={{
          margin: "50px 0px",
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
              <Typography mt={2} variant="h6" fontWeight={600}>
                Blood Request
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
                  <BloodInput
                    label="Hospital Name"
                    fullWidth={true}
                    name="hospitalName"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    label="Hospital Address"
                    type="text"
                    fullWidth={true}
                    name="hospitalAddress"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="number"
                    label="Phone Number"
                    fullWidth={true}
                    name="phoneNumber"
                  />
                </Grid>

                <Grid item md={12}>
                  <BloodInput
                    type="text"
                    label="Date of Donation"
                    fullWidth={true}
                    name="dateOfDonation"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodInput
                    type="text"
                    label="Reason"
                    fullWidth={true}
                    name="reason"
                  />
                </Grid>
                <Grid item md={12}>
                  <BloodCheckBox
                    label="Agreement to terms and conditions"
                    name="termsAndCondition"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
                className="btnPrimary"
              >
                Send Blood Request
              </Button>
            </BloodForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default BloodRequestPage;
