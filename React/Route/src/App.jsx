import Layout from "./Components/Layout/Layout.jsx";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Start from "./Components/Start/Start.jsx";

function App() {
  const routes = createBrowserRouter([{
    path:"", element: <Layout/>, children: [      
      {index: true, element: <Start />},
      {path: "about", element: <About />},
      {path: "portfolio", element: <Portfolio />},
      {path: "contact", element: <Contact />},
    ]
  }]);
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
