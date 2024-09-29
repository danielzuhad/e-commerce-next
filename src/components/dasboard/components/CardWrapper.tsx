"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  title?: string;
}

const CardWrapper = ({
  children,
  className,
  href,
  title,
}: CardWrapperProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <>
      <div
        className={cn(
          "rounded-md max-sm:max-w-[250px] w-full bg-white p-3 h-[250px] sm:h-full border shadow-sm border-muted flex flex-col  ",
          className
        )}
      >
        <p
          onClick={handleNavigation}
          className={cn(
            "w-full rounded-t-md font-semibold text-lg",
            href === "hover:cursor-pointer"
          )}
        >
          {title}
        </p>
        <div className="w-full h-full">{children}</div>
      </div>
    </>
  );
};

export default CardWrapper;
