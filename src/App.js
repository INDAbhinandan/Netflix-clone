import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
