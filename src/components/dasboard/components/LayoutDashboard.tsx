import { cn } from "@/lib/utils";

interface LayoutDashboardProps {
  children: React.ReactNode;
  className?: string;
}

const LayoutDashboard = ({ children, className }: LayoutDashboardProps) => {
  return (
    <main
      className={cn(
        "grid h-full w-full grid-flow-row-dense grid-cols-1 place-items-center gap-4 pb-8 pt-24 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[auto_1fr] lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default LayoutDashboard;
