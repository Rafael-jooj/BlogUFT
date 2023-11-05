import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/BlogList" element={<BlogList/>}/>
        <Route path="/BlogPost" element={<BlogPost/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
