import { cn } from "@/lib/utils";

interface LayoutDashboardProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutDashboard = ({ children, className }: LayoutDashboardProps) => {
  return (
    <main
      className={cn(
        "w-full h-full gap-4 grid grid-cols-1  pb-8 sm:grid-cols-3 xl:grid-cols-4 pt-24  xl:grid-rows-[40%_60%] place-items-center max-sm:overflow-auto",
        className
      )}
    >
      {children}
    </main>
  );
};

export default LayoutDashboard;
