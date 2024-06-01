import BloodForm from "@/components/Forms/BloodForm";
import BloodSelect from "@/components/Forms/BloodSelect";
import BloodModal from "@/components/Shared/BloodModal/BloodModal";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";
import { statusTypes } from "@/constants/donorConst";
import { useUpdateDonationRequestMutation } from "@/redux/api/donorApi";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  DefValues: any;
};

const BloodRequestToMeModal = ({ open, setOpen, DefValues }: TProps) => {
  const [updateRequestStatus] = useUpdateDonationRequestMutation();
  console.log(DefValues.requesterId);

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);

    try {
      const res = await updateRequestStatus({
        id: DefValues?.id,
        data: values,
      }).unwrap();

      if (res?.id) {
        bloodToast("success", "Request status updated successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    requestStatus: "",
  };
  return (
    <BloodModal open={open} setOpen={setOpen} title="Update Status">
      <BloodForm
        onSubmit={handleFormSubmit}
        // resolver={zodResolver(profileValidation)}
        defaultValues={defaultValues}
      >
        <Box
          sx={{
            minWidth: "400px",
          }}
        >
          <Grid container spacing={2} my={1}>
            <Grid item md={12}>
              <BloodSelect
                label="Request status"
                name="requestStatus"
                options={statusTypes}
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
            Update
          </Button>
        </Box>
      </BloodForm>
    </BloodModal>
  );
};

export default BloodRequestToMeModal;
