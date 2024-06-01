import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import TryIcon from "@mui/icons-material/Try";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}/dashboard`,
          icon: DashboardIcon,
        },
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: TryIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: DashboardIcon,
        },
        {
          title: "My Blood Request",
          path: `${role}/my-blood-request`,
          icon: DashboardIcon,
        },
        {
          title: "Requests for Blood to Me",
          path: `${role}/request-blood-me`,
          icon: DashboardIcon,
        },
        {
          title: "Password",
          path: `${role}/change-password`,
          icon: DashboardIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
