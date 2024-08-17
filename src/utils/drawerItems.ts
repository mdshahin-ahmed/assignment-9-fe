import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import BarChartIcon from "@mui/icons-material/BarChart";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}/manage-user`,
          icon: DashboardIcon,
        },
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: AccountBoxIcon,
        },
        {
          title: "Analytics",
          path: `${role}/analytics`,
          icon: BarChartIcon,
        },
        {
          title: "My Blood Request",
          path: `${role}/my-blood-request`,
          icon: UnarchiveIcon,
        },
        {
          title: "Requests for Blood to Me",
          path: `${role}/request-blood-me`,
          icon: ArchiveIcon,
        },
        {
          title: "Password",
          path: `${role}/change-password`,
          icon: EnhancedEncryptionIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: AccountBoxIcon,
        },
        {
          title: "My Blood Request",
          path: `${role}/my-blood-request`,
          icon: UnarchiveIcon,
        },
        {
          title: "Requests for Blood to Me",
          path: `${role}/request-blood-me`,
          icon: ArchiveIcon,
        },
        {
          title: "Password",
          path: `${role}/change-password`,
          icon: EnhancedEncryptionIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
