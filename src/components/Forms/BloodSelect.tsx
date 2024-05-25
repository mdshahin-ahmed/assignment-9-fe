import { MenuItem, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  options: { id: number; value: any; name: string }[];
  //   defaultValue?: string;
};

const BloodSelect = ({
  name,
  label,
  //   defaultValue = "",
  options,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      //   defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          label={label}
          fullWidth
          variant="outlined"
          error={!!error?.message}
          helperText={error?.message}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default BloodSelect;
