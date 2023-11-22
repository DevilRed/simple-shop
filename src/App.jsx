import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<ItemListContainer></ItemListContainer>}
          ></Route>
          <Route
            path="/item/:id"
            element={<ItemDetailContainer></ItemDetailContainer>}
          ></Route>
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
