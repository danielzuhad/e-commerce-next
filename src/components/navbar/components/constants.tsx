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
