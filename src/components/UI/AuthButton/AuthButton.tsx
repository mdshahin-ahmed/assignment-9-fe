import { getUserInfo, removeUser } from "@/services/authServices";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.id ? (
        <>
          <Typography
            className="colorWhite"
            component={Link}
            href={`/dashboard/${userInfo?.role}/my-profile`}
          >
            My Profile
          </Typography>
          <Button
            onClick={handleLogOut}
            variant="outlined"
            sx={{
              bgcolor: "#F50062",
              color: "white",
              border: "1px solid white",
              "&:hover": {
                color: "white",
                border: "1px solid white",
              },
            }}
          >
            Log out
          </Button>
        </>
      ) : (
        <Button
          component={Link}
          href="/login"
          variant="outlined"
          sx={{
            bgcolor: "#F50062",
            color: "white",
            border: "1px solid white",
            "&:hover": {
              color: "white",
              border: "1px solid white",
            },
          }}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
