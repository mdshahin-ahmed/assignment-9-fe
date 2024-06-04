import BloodForm from "@/components/Forms/BloodForm";
import BloodSelect from "@/components/Forms/BloodSelect";
import BloodModal from "@/components/Shared/BloodModal/BloodModal";
import { bloodToast } from "@/components/Shared/BloodToaster/BloodToaster";
import { userRoleTypes, userStatusTypes } from "@/constants/donorConst";
import { useUpdateMyProfileMutation } from "@/redux/api/profileApi";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  DefValues: any;
};

const updateUserValidation = z.object({
  role: z.enum(["ADMIN", "USER"]),
  userStatus: z.enum(["ACTIVATE", "DEACTIVATE"]),
});

const UserModal = ({ open, setOpen, DefValues }: TProps) => {
  const [updateUser] = useUpdateUserMutation();

  console.log(DefValues);
  const handleFormSubmit = async (values: FieldValues) => {
    try {
      const res = await updateUser({
        id: DefValues.userId,
        data: values,
      }).unwrap();

      if (res?.id) {
        bloodToast("success", "User updated successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    role: DefValues?.role,
    userStatus: DefValues?.userStatus,
  };

  return (
    <BloodModal open={open} setOpen={setOpen} title="Update User">
      <BloodForm
        onSubmit={handleFormSubmit}
        resolver={zodResolver(updateUserValidation)}
        defaultValues={defaultValues}
      >
        <Box
          sx={{
            minWidth: "400px",
          }}
        >
          <Grid container spacing={2} my={1}>
            <Grid item md={12}>
              <BloodSelect label="Role" name="role" options={userRoleTypes} />
            </Grid>
            <Grid item md={12}>
              <BloodSelect
                label="Status"
                name="userStatus"
                options={userStatusTypes}
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
        </Box>
      </BloodForm>
    </BloodModal>
  );
};

export default UserModal;
