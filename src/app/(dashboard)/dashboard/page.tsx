import CardWrapper from "@/components/dasboard/components/CardWrapper";
import LayoutDashboard from "@/components/dasboard/components/LayoutDashboard";

const Dashboard = () => {
  return (
    <LayoutDashboard>
      {/* upper */}
      <CardWrapper>Profile</CardWrapper>
      <CardWrapper>Income</CardWrapper>
      <CardWrapper>Expense</CardWrapper>
      <CardWrapper className="lg:col-span-1">Cart</CardWrapper>
      {/* upper end */}

      {/* lower */}
      <CardWrapper className="sm:col-span-2 lg:col-span-2 xl:col-span-1">
        transaction
      </CardWrapper>
      <CardWrapper className=" sm:col-span-3 ">graph</CardWrapper>
      {/* lower end */}
    </LayoutDashboard>
  );
};

export default Dashboard;
