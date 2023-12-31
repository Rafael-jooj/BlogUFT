import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./api/PrivateRoute";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import MeusBlogs from "./pages/MeusBlogs";
import EditeBlog from "./pages/EditBlog";

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
            <PrivateRoute>
              <>
                <Header />
                <CreateBlog />
                <Footer />
              </>
            </PrivateRoute>
          }/>

          <Route path="/MeusBlogs" element={
            <PrivateRoute>
              <>
                <Header />
                <MeusBlogs />
                <Footer />
              </>
            </PrivateRoute>
          }/>

          <Route path="/EditeBlog/:id" element={
            <PrivateRoute>
              <>
                <Header />
                <EditeBlog />
                <Footer />
              </>
            </PrivateRoute>
          }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

