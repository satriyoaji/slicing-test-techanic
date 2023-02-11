
import AppContainer from "../components/AppContainer";
import ErrorPage from "../pages/404Pages/ErrorPage";

export const APP_ROUTE = [
  {
    name: "Home",
    path: "/",
    // exact: true, //di false karena ada nested Switch di dalamnya AppContainer
    element: AppContainer,
    private: true,
    isPasien: true,
  },
  {
    name: "Error Page not found",
    path: "/*",
    element: ErrorPage,
    private: true,
    exact: true,
    isNotFound: true,
  },
  {
    name: "Error Page not found",
    path: "/error",
    element: ErrorPage,
    private: true,
    exact: true,
    isNotFound: true,
  }
];
