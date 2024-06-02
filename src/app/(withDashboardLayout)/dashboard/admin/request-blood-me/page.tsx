"use client";
import BloodRequestToMeCard from "@/components/UI/BloodRequestToMe/BloodRequestToMeCard";
import { useBloodRequestToMeQuery } from "@/redux/api/donorApi";
import { Box, Container, Grid, Skeleton } from "@mui/material";
import Image from "next/image";
import noData from "@/assets/no-data.png";

const RequestBloodToMe = () => {
  const { data, isFetching } = useBloodRequestToMeQuery("");

  return (
    <Box
      sx={{
        margin: "30px 0px",
      }}
    >
      <Grid container spacing={3}>
        {data?.length > 0 && !isFetching ? (
          <>
            {data?.map((request: any) => (
              <Grid key={request.id} item md={6}>
                <BloodRequestToMeCard request={request} />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {!isFetching && (
              <Box
                sx={{
                  margin: "0 auto",
                }}
              >
                <Image height={400} width={600} src={noData} alt="no data" />
              </Box>
            )}
            {isFetching && (
              <Grid container spacing={3}>
                <Grid item md={4}>
                  <Skeleton variant="rectangular" height={200} />
                </Grid>
                <Grid item md={4}>
                  <Skeleton variant="rectangular" height={200} />
                </Grid>
                <Grid item md={4}>
                  <Skeleton variant="rectangular" height={200} />
                </Grid>
              </Grid>
            )}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default RequestBloodToMe;
