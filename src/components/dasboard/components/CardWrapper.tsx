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
  classNameContent?: string;
}

const CardWrapper = ({
  children,
  className,
  href,
  title,
  classNameContent,
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
          "flex h-[250px] w-full flex-col overflow-hidden max-sm:max-w-[250px] sm:h-full",
          className,
        )}
      >
        <CardHeader className="py-4">
          <CardTitle
            onClick={handleNavigation}
            className={cn("w-full text-lg", href === "hover:cursor-pointer")}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className={cn("h-full w-full", classNameContent)}>
          {children}
        </CardContent>
      </Card>
    </>
  );
};

export default CardWrapper;
