import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Box, Container } from "@mui/material";
import CoverageMap from "./CoverageMap";

const CoverageArea = () => {
  return (
    <Container>
      {/* Header section  */}
      <Box className="heading" display="flex" justifyContent="center" mb={4}>
        <SectionHeader heading="Coverage Area" />
      </Box>

      {/* Map section */}
      <CoverageMap />
    </Container>
  );
};

export default CoverageArea;
