import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Adminpage from './pages/Adminpage.jsx'
import EditPost from "./pages/EditPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import Login from "./pages/login.js"
import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice.js";


const App = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="/addPost/" element={<AddPost />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )

}

export default App
