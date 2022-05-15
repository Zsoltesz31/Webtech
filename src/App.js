import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from './components/navbar.js'
import Adminpage from './pages/Adminpage.jsx'
import EditPost from "./pages/EditPost.jsx";


const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/editPost/:id" element={<EditPost />} />

      </Routes>
    </BrowserRouter>
  )

}

export default App
