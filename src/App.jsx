import { BrowserRouter, Route } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Routes } from "react-router";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
