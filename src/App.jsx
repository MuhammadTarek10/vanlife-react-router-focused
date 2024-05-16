import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Host/Dashboard";
import { Host } from "./pages/Host/Host";
import HostVanDetailsLayout from "./pages/Host/HostVanDetailsLayout";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import HostVansPhotos from "./pages/Host/HostVansPhotos";
import HostVansPricing from "./pages/Host/HostVansPricing";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import NotFound from "./pages/NotFound";
import { VanDetails } from "./pages/Vans/VanDetails";
import { Vans } from "./pages/Vans/Vans";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVanDetailsLayout />}>
                <Route index element={<HostVansDetails />} />
                <Route path="photos" element={<HostVansPhotos />} />
                <Route path="pricing" element={<HostVansPricing />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
