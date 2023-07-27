import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-xl tracking-wide text-center font-bold">
          Orders app
        </p>
        <p className="mt-3 text-gray-500">
          Manage your store with the following options
        </p>
        <nav className="mt-10">
          <NavLink
            className="p-1 text-gray-400 block ease-in-out duration-300 hover:bg-yellow-500 hover:text-gray-900"
            to="/"
          >
            Orders
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block ease-in-out duration-300 hover:bg-yellow-500 hover:text-gray-900"
            to="/new-dish"
          >
            New Dish
          </NavLink>
          <NavLink
            className="p-1 text-gray-400 block ease-in-out duration-300 hover:bg-yellow-500 hover:text-gray-900"
            to="/menu"
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
