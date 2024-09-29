"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";

const ProfileDash = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <Avatar>
        <Skeleton className="w-full h-full" />
      </Avatar>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-3">
      <Avatar className="w-20 h-20">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <p className="line-clamp-1 font-semibold text-base lg:text-lg">
          {user?.fullName}
        </p>
        <p className="line-clamp-1 text-muted-foreground font-light text-sm text-center">
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>
    </div>
  );
};

export default ProfileDash;
