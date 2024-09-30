import NavLinkList from "./components/NavLinkList";
import NavMenu from "./components/NavMenu";

const Navbar = () => {
  return (
    <nav className="w-screen fixed top-0 z-50 h-20 flex items-center bg-white/20 backdrop-blur-lg">
      <div className="container mx-auto max-sm:px-3 flex items-center justify-between h-full lg:max-w-screen-xl ">
        {/* Icon & links */}
        <div className="flex items-center h-full">
          <a
            href="/"
            className="text-xl text-primary font-bold hover:cursor-pointer"
          >
            Ecommerce
          </a>

          <div className="flex ml-10 lg:ml-20 gap-x-5 max-sm:hidden h-max mt-0.5">
            <NavLinkList />
          </div>
        </div>

        {/* Profile */}
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
