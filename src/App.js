import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Event";
import ExeCom from "./Pages/ExeCom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import AdminLogin from "./Pages/Admin/Login";
import PostEvent from "./Pages/Admin/PostEvent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events/:id/*" element={<EventPage />} />
        <Route path="/execom" element={<ExeCom />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/postEvent" element={PostEvent} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
