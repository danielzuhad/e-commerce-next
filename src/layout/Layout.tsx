import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <section className="w-full h-full flex items-center flex-col">
        {children}
      </section>
    </>
  );
};

export default Layout;
