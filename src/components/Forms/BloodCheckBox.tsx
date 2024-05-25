import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label: string;
  defaultValue?: string;
};

const BloodCheckBox = ({ name, label, defaultValue = "" }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      //   defaultValue={defaultValue}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          control={
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          }
        />
      )}
    />
  );
};
export default BloodCheckBox;
