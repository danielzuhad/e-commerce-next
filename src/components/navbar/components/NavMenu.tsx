"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { iconStyle } from "@/lib/constants/iconStyle";
import { LogOut, Menu, ShoppingCart, User } from "lucide-react";
import { useClerk, useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import NavLinkList from "./NavLinkList";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import NavDropdownMenu from "./NavDropdownMenu";

const NavMenu = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const pathName = usePathname();

  if (!isLoaded) {
    return (
      <Avatar>
        <Skeleton className="w-full h-full" />
      </Avatar>
    );
  }

  if (!isSignedIn) {
    return (
      <Button
        asChild
        variant={"outline"}
        size={"default"}
        className={
          pathName === "/sign-in" || pathName === "/sign-up" ? "hidden" : ""
        }
      >
        <a href="/sign-in">Sign In</a>
      </Button>
    );
  }

  return (
    <div>
      {/* Desktop */}
      <div className="max-sm:hidden flex items-center h-full">
        <ShoppingCart {...iconStyle} className="w-5 h-5 hover:cursor-pointer" />

        <Separator orientation="vertical" className="mx-3 h-[50%]" />

        <p className="text-sm max-md:hidden mr-2">{user.firstName}</p>

        <NavDropdownMenu
          isSignedIn={isSignedIn}
          user={user}
          signOut={signOut}
        />
      </div>
      {/* Desktop ENd */}

      {/* Mobile */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <Menu {...iconStyle} />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <div className="mt-8 pb-3  h-max gap-2 flex items-center">
              <Avatar>
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="text-xs">
                <p className="line-clamp-1 font-semibold text-sm">
                  {user.fullName}
                </p>
                <p className="line-clamp-1 text-muted-foreground font-light">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="py-5 flex flex-col items-start gap-5 border-y border-muted-foreground/50 px-3">
              <NavLinkList className="flex flex-row-reverse text-foreground" />
              <NavLink
                className="flex-row-reverse text-foreground"
                href={"/profile"}
                icon={<User {...iconStyle} />}
                link="Profile"
              />
            </div>

            <div className="w-full px-3 mt-5 flex items-start ">
              <NavLink
                className="flex-row-reverse text-destructive "
                href={!isSignedIn ? "/sign-in" : ""}
                icon={<LogOut {...iconStyle} />}
                link="Sign Out"
                onClick={
                  isSignedIn ? () => signOut({ redirectUrl: "/" }) : () => {}
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Mobile EJnd */}
    </div>
  );
};

export default NavMenu;
