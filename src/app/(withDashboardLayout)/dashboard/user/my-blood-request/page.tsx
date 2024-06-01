"use client";

import { useMyBloodRequestQuery } from "@/redux/api/profileApi";
import { Box, Grid, Skeleton } from "@mui/material";
import Image from "next/image";
import noData from "@/assets/no-data.png";
import MyBloodRequestCard from "@/components/UI/MyBloodRequestCard/MyBLoodRequestCard";

const MyBloodRequestPage = () => {
  const { data, isFetching } = useMyBloodRequestQuery("");

  return (
    <Box
      sx={{
        margin: "50px 0px",
      }}
    >
      <Grid container spacing={3}>
        {data?.length > 0 && !isFetching ? (
          <>
            {data?.map((bloodRequest: any) => (
              <Grid key={bloodRequest.id} item md={4}>
                <MyBloodRequestCard bloodRequest={bloodRequest} />
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

export default MyBloodRequestPage;
