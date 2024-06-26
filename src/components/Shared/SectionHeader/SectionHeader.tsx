import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({
  heading,
  count,
}: {
  heading: string;
  count?: number;
}) => {
  return (
    <Box>
      <Typography
        sx={{
          padding: "0px 60px",
          fontWeight: "700",
          fontSize: "2.125rem",
          "@media (max-width:600px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        {heading} {count && count}
      </Typography>
      <Box
        sx={{
          height: "8px",
          bgcolor: "#ff0066",
          borderRadius: "5px",
          mt: 1,
        }}
      ></Box>
      <Box
        sx={{
          height: "8px",
          bgcolor: "#ff0066",
          borderRadius: "5px",
          margin: "10px 70px",
        }}
      ></Box>
    </Box>
  );
};

export default SectionHeader;
