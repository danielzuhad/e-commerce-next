"use client";

import { useUser } from "@clerk/nextjs";
import { NAVBAR_LINKS } from "../constants";
import NavLink from "./NavLink";

type NavLinkListProp = {
  className?: string;
};

const NavLinkList = ({ className }: NavLinkListProp) => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 items-start sm:items-center sm:flex-row">
      {NAVBAR_LINKS.map((link, i) => (
        <NavLink
          key={i}
          href={link.href}
          icon={link.icon}
          link={link.name}
          className={className}
        />
      ))}
    </div>
  );
};

export default NavLinkList;
