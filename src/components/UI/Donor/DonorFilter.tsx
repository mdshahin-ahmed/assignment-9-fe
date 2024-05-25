"use client";

import { availabilityType, bloodType } from "@/Constant/donorConst";
import BloodSelect from "@/components/Forms/BloodSelect";
import DebouncedSearch from "@/utils/Debounce";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const DonorFilter = ({ defaultValues, setDefaultValues }: any) => {
  const handleBloodChange = (event: SelectChangeEvent) => {
    setDefaultValues({
      ...defaultValues,
      bloodType: event.target.value as string,
    });
  };
  const handleAvailability = (event: SelectChangeEvent) => {
    setDefaultValues({
      ...defaultValues,
      availability: event.target.value as string,
    });
  };

  // const handleLocation = (query: string) => {
  //   setDefaultValues({
  //     ...defaultValues,
  //     location: query,
  //   });
  // };

  const handleSearch = (query: string) => {
    setDefaultValues({
      ...defaultValues,
      searchTerm: query,
    });
  };
  return (
    <Grid container spacing={5}>
      <Grid item md={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Filter With Blood Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={defaultValues?.bloodType}
            label="Age"
            onChange={handleBloodChange}
          >
            {bloodType.map((item) => (
              <MenuItem key={item.id} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid item md={3}>
        <DebouncedSearch
          onSearch={handleLocation}
          placeholder="Filter by location"
        />
      </Grid> */}
      <Grid item md={4}>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter with Availability
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={defaultValues?.availability}
              label="Age"
              onChange={handleAvailability}
            >
              {availabilityType.map((item) => (
                <MenuItem key={item.id} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item md={4}>
        <DebouncedSearch onSearch={handleSearch} placeholder="Search..." />
      </Grid>
    </Grid>
  );
};

export default DonorFilter;
