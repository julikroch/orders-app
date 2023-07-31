import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { DishProps } from "../typings";
import { FirebaseContext } from "../firebase";
import Dish from "../components/Dish";

const Menu = () => {
  const { firebase } = useContext(FirebaseContext);
  const [data, setData] = useState<DishProps[] | []>();

  const handleSnapshot = (
    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  ) => {
    const result = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...(doc.data() as DishProps),
      };
    });
    setData(result);
  };

  useEffect(() => {
    const getDishes = () => {
      firebase.db.collection("products").onSnapshot(handleSnapshot);
    };

    getDishes();
  }, [firebase]);

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        className="bg-blue-800 ease-in-out duration-300 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
        to="/new-dish"
      >
        New Dish
      </Link>

      {data && data.map((item) => <Dish key={item.id} item={item} />)}
    </>
  );
};

export default Menu;
