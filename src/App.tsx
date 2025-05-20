import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CarOverview from "./pages/CarOverview/CarOverview";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarOverview />} />
      </Routes>
    </>
  );
}

export default App;
