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
  return <RouterProvider router={router} />;
}

export default App;
