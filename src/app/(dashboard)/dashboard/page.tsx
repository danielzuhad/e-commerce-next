import CardWrapper from "@/components/dasboard/components/CardWrapper";
import IncomeDash from "@/components/dasboard/components/IncomeDash";
import LayoutDashboard from "@/components/dasboard/components/LayoutDashboard";
import ProfileDash from "@/components/dasboard/components/ProfileDash";
import TotalProducts from "@/components/dasboard/components/TotalProducts";
import TransactionDash from "@/components/dasboard/components/TransactionDash";

const Dashboard = () => {
  return (
    <LayoutDashboard>
      <CardWrapper title="Profile" className="md:max-h-[250px]">
        <ProfileDash />
      </CardWrapper>

      <CardWrapper title="Income" className="md:max-h-[250px]">
        <IncomeDash />
      </CardWrapper>

      {/* <div className="grid w-full grid-cols-1 place-items-center gap-4 sm:col-span-2 sm:grid-cols-2 sm:grid-rows-2"> */}
      <CardWrapper title="Expense" className="md:max-h-[250px]">
        <IncomeDash />
      </CardWrapper>

      <CardWrapper title="Total Products" className="">
        <TotalProducts />
      </CardWrapper>

      <CardWrapper
        title="Transaction"
        className="max-sm:h-[500px] sm:row-span-2 sm:row-start-2 lg:row-span-1"
      >
        <TransactionDash />
      </CardWrapper>
      {/* </div> */}

      <CardWrapper className="sm:col-span-2 lg:col-span-3">graph</CardWrapper>
    </LayoutDashboard>
  );
};

export default Dashboard;
