import logo from "@/assets/logo-primary.png";
import { UserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/authServices";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={logo} width={113} height={40} alt="Logo" />
      </Stack>
      {
        <List>
          {drawerItems(userRole as UserRole).map((item, index) => (
            <SidebarItem key={index} item={item} index={index} />
          ))}
        </List>
      }
    </Box>
  );
};

export default SideBar;
