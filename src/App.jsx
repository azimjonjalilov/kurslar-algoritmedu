import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SMM from "./courses/SMM";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smm" element={<SMM />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
