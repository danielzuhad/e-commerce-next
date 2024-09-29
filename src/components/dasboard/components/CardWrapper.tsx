"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card
        className={cn(
          "max-sm:max-w-[250px] w-full h-[250px] sm:h-full flex flex-col  ",
          className
        )}
      >
        <CardHeader className="py-4">
          <CardTitle
            onClick={handleNavigation}
            className={cn("w-full   text-lg", href === "hover:cursor-pointer")}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full h-full">{children}</CardContent>
      </Card>
    </>
  );
};

export default CardWrapper;
