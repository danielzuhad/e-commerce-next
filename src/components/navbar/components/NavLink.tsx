"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkHTMLAttributes } from "react";

interface NavLinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  link: string;
  icon?: JSX.Element;
}

const NavLink = ({ href, icon, link, className }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={href}
        className={cn(
          "flex text-muted-foreground/50  items-center font-light gap-x-2 hover:text-foreground transition-all",
          pathname === href && "text-foreground font-medium",
          className
        )}
      >
        {link} {icon}
      </Link>
    </>
  );
};

export default NavLink;
