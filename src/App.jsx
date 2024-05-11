import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Host/Dashboard";
import { Host } from "./pages/Host/Host";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { VanDetails } from "./pages/Vans/VanDetails";
import { Vans } from "./pages/Vans/Vans";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VanDetails />}></Route>
          <Route path="/host" element={<Host />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/reviews" element={<Reviews />}></Route>
            <Route path="/host/income" element={<Income />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
