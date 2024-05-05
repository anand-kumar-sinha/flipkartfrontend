import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AdminLogi from "./pages/AdminLogi";
import AdminAddProduct from "./pages/AdminAddProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/admin/login" element={<AdminLogi />} />
          <Route path="/admin/addProduct" element={<AdminAddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
