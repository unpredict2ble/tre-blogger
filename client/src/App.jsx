import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      {/* this Header will appear at the top of every route */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;