"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClerk, useUser } from "@clerk/nextjs";

interface UserButtonProps {
  variant: "navbar" | "sidebar";
  className?: string;
}

const UserButton = ({ variant, className }: UserButtonProps) => {
  const { isLoaded, user } = useUser();
  const { openSignIn, signOut } = useClerk();

  if (!isLoaded) return null;

  return (
    <Button
      onClick={user?.id ? () => signOut() : () => openSignIn()}
      variant={variant === "navbar" ? "outline" : "ghost"}
      size={"default"}
      className={cn("", className)}
    >
      {user?.id ? "Sign Out" : "Sign In"}
    </Button>
  );
};

export default UserButton;
