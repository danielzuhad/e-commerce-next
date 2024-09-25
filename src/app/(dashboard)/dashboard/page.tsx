import LayoutDashboard from "@/components/dasboard/components/LayoutDashboard";

const Dashboard = () => {
  return (
    <>
      <LayoutDashboard>
        {/* upper */}
        <div>Profile</div>
        <div>Income</div>
        <div>Expense</div>
        <div className="lg:col-span-1">Cart</div>
        {/* upper end */}

        {/* lower */}
        <div className="sm:col-span-2 lg:col-span-2 xl:col-span-1">
          transaction
        </div>
        <div className="sm:col-span-2 lg:col-span-3 ">graph</div>
        {/* lower end */}
      </LayoutDashboard>
    </>
  );
};

export default Dashboard;
