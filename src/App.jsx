import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Error } from "./components/Error";
import { Layout } from "./components/Layout";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Host/Dashboard";
import { Host } from "./pages/Host/Host";
import {
  HostVanDetailsLayout,
  loader as hostVansDetailsLoader,
} from "./pages/Host/HostVanDetailsLayout";
import { HostVans, loader as hostVansLoader } from "./pages/Host/HostVans";
import { HostVansDetails } from "./pages/Host/HostVansDetails";
import { HostVansPhotos } from "./pages/Host/HostVansPhotos";
import { HostVansPricing } from "./pages/Host/HostVansPricing";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import {
  Login,
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import {
  VanDetails,
  loader as vanDetailsLoader,
} from "./pages/Vans/VanDetails";
import { Vans, loader as vansLoader } from "./pages/Vans/Vans";
import { requireAuth } from "./utils/utils";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<VanDetails />}
          loader={vanDetailsLoader}
          errorElement={<Error />}
        />
        <Route
          path="host"
          element={<Host />}
          loader={async (request) => await requireAuth(request)}
          errorElement={<Error />}>
          <Route
            index
            element={<Dashboard />}
            loader={async (request) => await requireAuth(request)}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async (request) => await requireAuth(request)}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async (request) => await requireAuth(request)}
          />
          <Route
            path="vans"
            element={<Outlet />}
            loader={async (request) => await requireAuth(request)}>
            <Route index element={<HostVans />} loader={hostVansLoader} />
            <Route
              path=":id"
              element={<HostVanDetailsLayout />}
              loader={hostVansDetailsLoader}>
              <Route
                index
                element={<HostVansDetails />}
                loader={async (request) => await requireAuth(request)}
              />
              <Route
                path="photos"
                element={<HostVansPhotos />}
                loader={async (request) => await requireAuth(request)}
              />
              <Route
                path="pricing"
                element={<HostVansPricing />}
                loader={async (request) => await requireAuth(request)}
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
