import { DishProps } from "../typings";

const Dish = ({ item }: { item: DishProps }) => {
  const { name, category, price, description } = item;

  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <p className="font-bold text-2xl text-yellow-600 mb-4">{name}</p>
          <p className="text-gray-600 mb-4">
            Category:{" "}
            <span className="text-gray-700 font-bold uppercase">
              {category}
            </span>
          </p>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600 mb-4">
            Price:{" "}
            <span className="text-gray-700 font-bold uppercase">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dish;
