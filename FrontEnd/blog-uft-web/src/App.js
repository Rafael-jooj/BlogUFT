import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-body">
      <Header/>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/BlogList" element={<BlogList/>}/>
          <Route path="/BlogPost" element={<BlogPost/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
