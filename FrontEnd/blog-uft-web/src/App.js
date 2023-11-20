import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <div className="font-body">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }/>

          <Route path="/BlogList" element={
            <>
              <Header />
              <BlogList />
              <Footer />
            </>
          }/>

          <Route path="/BlogPost/:id" element={
            <>
              <Header />
              <BlogPost />
              <Footer />
            </>
          }/>

          <Route path="/CreateBlog" element={
            <>
              <Header />
              <CreateBlog />
              <Footer />
            </>
          }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

