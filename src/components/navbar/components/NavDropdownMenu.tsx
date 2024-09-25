import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { SignOut, UserResource } from "@clerk/types";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MENU_LINKS } from "../constants";

interface NavDropdownMenuProps {
  user: UserResource | null | undefined;
  isSignedIn: boolean | undefined;
  signOut: SignOut;
}

const NavDropdownMenu = ({
  user,
  isSignedIn,
  signOut,
}: NavDropdownMenuProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <DropdownMenu onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-x-1 hover:cursor-pointer">
            <Avatar className=" w-7 h-7 ">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <ChevronUp
              size={14}
              className={cn(" transition-all", open && "rotate-180")}
            />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {MENU_LINKS.map((link, i) =>
            link.name === "Sign Out" ? (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  key={i}
                  onClick={
                    isSignedIn ? () => signOut({ redirectUrl: "/" }) : () => {}
                  }
                  className="text-destructive focus:bg-destructive/70 focus:text-destructive-foreground"
                >
                  Sign Out
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem key={i}>
                <Link href={link.href}>{link.name}</Link>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavDropdownMenu;
