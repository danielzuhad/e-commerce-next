import { iconStyle } from "@/lib/constants/iconStyle";
import { House, PackageSearch } from "lucide-react";

export const NAVBAR_LINKS = [
  {
    name: "Home",
    href: "/",
    icon: <House {...iconStyle} />,
  },
  {
    name: "Products",
    href: "/products",
    icon: <PackageSearch {...iconStyle} />,
  },
];

export const MENU_LINKS = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Sign Out",
    href: "",
  },
];
