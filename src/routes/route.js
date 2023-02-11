
import AppContainer from "../components/AppContainer";
import ErrorPage from "../pages/404Pages/ErrorPage";
import AboutPage from "../pages/home";
import AcademicPage from "../pages/academic";
import NewsDetailPage from "../pages/news";

export const APP_ROUTE = [
  {
    name: "Home",
    path: "/",
    // exact: true, //di false karena ada nested Switch di dalamnya AppContainer
    element: AppContainer,
    private: true,
    isPasien: true,
  },
  // {
  //   name: "About Page",
  //   path: "/home",
  //   element: AboutPage,
  //   private: true,
  //   isPasien: true,
  // },
  // {
  //   name: "Academic Page",
  //   path: "/academic",
  //   element: AcademicPage,
  //   private: true,
  //   isPasien: true,
  // },
  // {
  //   name: "News Detail",
  //   path: "/news/:id",
  //   element: NewsDetailPage,
  //   private: true,
  //   isPasien: true,
  // },
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
