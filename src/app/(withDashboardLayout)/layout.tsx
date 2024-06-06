"use client";

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
// import { isLoggedIn } from "@/services/authServices";
// import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLoggedIn()) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
