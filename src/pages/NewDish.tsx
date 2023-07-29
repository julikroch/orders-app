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

const NewDish = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
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
        .min(20, "The description must have more than 20 chars")
        .required("All fields are mandatory"),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">New dish</h1>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
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
              <div
                className="bg-red-100 border-l-4 border-red-500 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.name}</p>
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
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
                <div
                  className="bg-red-100 border-l-4 border-red-500 p-4 mb-5"
                  role="alert"
                >
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.price}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
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
                <div
                  className="bg-red-100 border-l-4 border-red-500 p-4 mb-5"
                  role="alert"
                >
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.category}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
              {formik.touched.image && formik.errors.image && (
                <div
                  className="bg-red-100 border-l-4 border-red-500 p-4 mb-5"
                  role="alert"
                >
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.image}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                name="description"
                placeholder="Dish description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <div
                  className="bg-red-100 border-l-4 border-red-500 p-4 mb-5"
                  role="alert"
                >
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.description}</p>
                </div>
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
