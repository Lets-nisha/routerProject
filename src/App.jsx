import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { User } from "./components/User/User";
import { Github, githubInfoLoader } from "./components/Github/Github";

import "./App.css"
import { ThemeProvider } from "./contexts/Theme";
import { useEffect, useState } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route path="about" element={<About />} />

      <Route path="contact" element={<Contact />} />

      <Route path="user/:UserId" element={<User />} />

      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader}
      />

    </Route>
  )
);

function App() {

  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("themeMode") || "light"
  );

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.documentElement.className = themeMode;
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
