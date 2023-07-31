import { useContext } from "react";
import { useNavigate } from "react-router";
import { FirebaseContext } from "../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const categories = [
  {
    id: 1,
    value: "breakfast",
    name: "Breakfast",
  },

  {
    id: 2,
    value: "food",
    name: "Food",
  },
  {
    id: 3,
    value: "dinner",
    name: "Dinner",
  },
  {
    id: 4,
    value: "drinks",
    name: "Drinks",
  },
  {
    id: 5,
    value: "desserts",
    name: "Desserts",
  },
  {
    id: 6,
    value: "salads",
    name: "Salads",
  },
];

const Label = ({ name }: { name: string }) => {
  if (name) return null;

  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2 capitalize"
      htmlFor={name}
    >
      {name}
    </label>
  );
};

const ErrorMsg = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-5" role="alert">
      <p className="font-bold">Hubo un error:</p>
      <p>{message}</p>
    </div>
  );
};

const NewDish = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
      exists: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "The name must have more than 3 chars")
        .required("All fields are mandatory"),
      price: Yup.number()
        .min(1, "The dish must have at least one number")
        .required("All fields are mandatory"),
      category: Yup.string().required("All fields are mandatory"),
      description: Yup.string()
        .min(10, "The description must have more than 10 chars")
        .required("All fields are mandatory"),
    }),
    onSubmit: (data) => {
      try {
        data.exists = true;
        firebase.db.collection("users").add(data);
        navigate("/menu");
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">New dish</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <Label name="name" />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Dish Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <ErrorMsg message={formik.errors.name} />
            )}
            <div className="mb-4">
              <Label name="price" />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="price"
                placeholder="$20"
                min={0}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price && (
                <ErrorMsg message={formik.errors.price} />
              )}
            </div>
            <div className="mb-4">
              <Label name="category" />
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">--Select--</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select>
              {formik.touched.category && formik.errors.category && (
                <ErrorMsg message={formik.errors.category} />
              )}
            </div>
            <div className="mb-4">
              <Label name="description" />
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                name="description"
                placeholder="Dish description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <ErrorMsg message={formik.errors.description} />
              )}
            </div>
            <input
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold cursor-pointer"
              type="submit"
              value="Add Dish"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewDish;
