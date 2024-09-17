import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <section className="container mx-auto h-full flex items-center flex-col max-sm:px-3">
        {children}
      </section>
    </>
  );
};

export default Layout;
