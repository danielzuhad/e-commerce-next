import { cn } from "@/lib/utils";
import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CardWrapper = ({ children, className }: CardWrapperProps) => {
  return (
    <>
      <div
        className={cn(
          "rounded-md max-sm:max-w-[250px] w-full bg-white p-4 h-[250px] sm:h-full border-2 border-muted",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default CardWrapper;
