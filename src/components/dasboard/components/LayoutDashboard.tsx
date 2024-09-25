import { cn } from "@/lib/utils";

interface LayoutDashboardProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutDashboard = ({ children, className }: LayoutDashboardProps) => {
  return (
    <>
      <main
        className={cn(
          "w-full h-full gap-4 grid grid-cols-1 sm:grid-cols-2 p-4 lg:grid-cols-3 xl:grid-cols-4 pt-24 grid-rows-2 lg:grid-rows-[200px_minmax(900px,_1fr)_100px]",
          className
        )}
      >
        {children}
      </main>
    </>
  );
};

export default LayoutDashboard;
