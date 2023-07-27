import { Route, Routes } from "react-router";
import Orders from "./pages/Orders";
import NewDish from "./pages/NewDish";
import Menu from "./pages/Menu";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-3/5 xl:w-4/5 p-6">
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/new-dish" element={<NewDish />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
