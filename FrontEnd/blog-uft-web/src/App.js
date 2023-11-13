import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="font-body">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />

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

          <Route path="/BlogPost" element={
            <>
              <Header />
              <BlogPost />
              <Footer />
            </>
          }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

