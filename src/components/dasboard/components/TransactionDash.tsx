import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const TransactionDash = () => {
  return (
    <ScrollArea className="h-[87%]">
      {Array.from({ length: 10 }).map((_, index) => (
        <TransactionCard key={index} />
      ))}
    </ScrollArea>
  );
};

export default TransactionDash;

const TransactionCard = () => {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <div className="flex w-1/2 items-center gap-x-2">
        <Avatar className="h-6 w-6 sm:h-10 sm:w-10">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="line-clamp-1">
          <p className="line-clamp-1 text-xs font-medium sm:text-sm">Test</p>
          <p className="line-clamp-1 text-xs text-muted-foreground">
            test@mail.com
          </p>
        </div>
      </div>

      <p className="line-clamp-1 w-1/2 text-end text-xs">Rp. 1.000.000</p>
    </div>
  );
};
