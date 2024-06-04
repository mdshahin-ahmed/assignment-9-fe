import BloodCheckBox from "@/components/Forms/BloodCheckBox";
import BloodForm from "@/components/Forms/BloodForm";
import BloodInput from "@/components/Forms/BloodInput";
import BloodSelect from "@/components/Forms/BloodSelect";
import BloodModal from "@/components/Shared/BloodModal/BloodModal";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";
import { bloodTypeSelect } from "@/constants/donorConst";
import { useUpdateMyProfileMutation } from "@/redux/api/profileApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  DefValues: any;
};

const profileValidation = z.object({
  name: z.string().min(1, "Please enter your name"),
  bloodType: z.string().min(1, "Please enter your Blood Type"),
  location: z.string().min(1, "Please enter your location"),
  email: z.string().min(1, "Please enter your email"),
  availability: z.boolean(),
});

const MyProfileModal = ({ open, setOpen, DefValues }: TProps) => {
  const [updateProfile] = useUpdateMyProfileMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const res = await updateProfile(values).unwrap();

      if (res?.id) {
        bloodToast("success", "User profile updated successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    name: DefValues?.name,
    bloodType: DefValues?.bloodType,
    availability: DefValues?.availability,
    location: DefValues?.location,
    email: DefValues?.email,
  };

  return (
    <BloodModal open={open} setOpen={setOpen} title="Update Profile">
      <BloodForm
        onSubmit={handleFormSubmit}
        resolver={zodResolver(profileValidation)}
        defaultValues={defaultValues}
      >
        <Grid container spacing={2} my={1}>
          <Grid item md={12}>
            <BloodInput label="Name" type="text" fullWidth={true} name="name" />
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
            <BloodSelect
              label="Blood type"
              name="bloodType"
              options={bloodTypeSelect}
            />
          </Grid>
          <Grid item md={12}>
            <BloodInput
              type="text"
              label="Location"
              fullWidth={true}
              name="location"
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
          className="btnPrimary"
        >
          Update
        </Button>
      </BloodForm>
    </BloodModal>
  );
};

export default MyProfileModal;
