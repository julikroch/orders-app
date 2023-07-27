import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        className="bg-blue-800 ease-in-out duration-300 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
        to="/new-dish"
      >
        New Dish
      </Link>
    </>
  );
};

export default Menu;
