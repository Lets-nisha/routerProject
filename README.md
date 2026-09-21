# 🚀 React Router Project

A React project built to practice and understand **routing, navigation, dynamic routes, nested routes, and API data fetching** using `react-router-dom`.

## 📌 About the Project

This project demonstrates how routing can be implemented in a React application using **React Router DOM**.

It includes multiple pages such as Home, About, Contact, User, and GitHub. It also demonstrates dynamic routing and fetching GitHub profile data using the GitHub API.

The project also includes a **Dark / Light Mode** using React Context API, Tailwind CSS, and LocalStorage.

## ✨ Features

* 🏠 Home Page
* ℹ️ About Page
* 📩 Contact Page
* 👤 Dynamic User Route
* 🐙 GitHub Profile Integration
* 🔗 Nested Routing
* 🧩 Reusable Layout
* 📊 GitHub Profile Statistics
* 📱 Responsive UI
* 🎨 Tailwind CSS Styling
* 🌙 Dark / Light Mode
* 💾 Theme Preference Persistence

## 🛠️ Technologies Used

* **React.js**
* **React Router DOM**
* **JavaScript**
* **Tailwind CSS**
* **GitHub API**
* **LocalStorage**
* **Vite**

## 🧠 React Router Concepts Used

### 1. `createBrowserRouter`

Used to create and configure the application's routes.

### 2. `RouterProvider`

Used to provide the router configuration to the React application.

### 3. Nested Routes

The project uses a common `Layout` component for different pages.

```jsx
<Route path="/" element={<Layout />}>
  <Route path="" element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
</Route>
```

### 4. `Outlet`

`Outlet` is used inside the Layout component to render the content of child routes.

```jsx
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
```

This allows the **Header and Footer to remain common** while the page content changes according to the route.

### 5. Dynamic Routing

The project uses a dynamic route:

```jsx
<Route path="user/:UserId" element={<User />} />
```

The dynamic parameter is accessed using `useParams()`:

```jsx
const { UserId } = useParams();
```

For example:

```text
/user/123
```

will display:

```text
User: 123
```

### 6. Route Loader

The GitHub route uses a loader to fetch GitHub profile data:

```jsx
<Route
  path="github"
  element={<Github />}
  loader={githubInfoLoader}
/>
```

### 7. `useLoaderData()`

The fetched GitHub data is accessed inside the component using:

```jsx
const data = useLoaderData();
```

The data is then displayed dynamically on the GitHub profile page.

## 🌙 Dark / Light Theme

This project includes a **Dark / Light Mode** using React Context API and Tailwind CSS.

### Theme Features

* ☀️ Light Mode
* 🌙 Dark Mode
* 🔄 Toggle between Light and Dark Mode
* 💾 Theme preference is saved in `localStorage`
* 🔁 Selected theme remains active after page refresh
* 🎨 Dark styling is applied across the application

### Theme Context

A custom `ThemeContext` is used to manage the current theme and provide theme functions to different components.

```jsx
const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});
```

The `ThemeProvider` provides the theme state and functions to the application:

```jsx
<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <RouterProvider router={router} />
</ThemeProvider>
```

### Theme Toggle

The theme toggle uses the current `themeMode` to switch between Light and Dark Mode.

```jsx
const { themeMode, lightTheme, darkTheme } = useTheme();

const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;

    if (darkModeStatus) {
        darkTheme();
    } else {
        lightTheme();
    }
};
```

### Tailwind Dark Mode

Tailwind CSS dark mode is configured using a custom variant:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

When Dark Mode is selected, the `dark` class is added to the HTML element.

```jsx
document.documentElement.classList.remove("light", "dark");
document.documentElement.classList.add(themeMode);
```

Tailwind's `dark:` classes are then used to apply dark styling:

```jsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
    Content
</div>
```

### Theme Persistence

The selected theme is stored in `localStorage` so that it remains active after refreshing the page.

```jsx
const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("themeMode") || "light"
);
```

The theme is saved whenever it changes:

```jsx
useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);

    localStorage.setItem("themeMode", themeMode);
}, [themeMode]);
```

## 🐙 GitHub API

The project fetches GitHub profile information and displays:

* Username
* Name
* Bio
* Followers
* Following
* Public Repositories
* GitHub Profile Link

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Github/
│   ├── Header/
│   ├── Home/
│   ├── User/
│   └── Footer/
│
├── App.jsx
├── Layout.jsx
├── App.css
└── main.jsx
```

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone <your-repository-url>
```

### Navigate to the project

```bash
cd <project-folder>
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will run locally using Vite.

## 📚 What I Learned

Through this project, I improved my understanding of:

* React Router DOM
* Route configuration
* Nested routing
* Dynamic routing
* `useParams()`
* `Outlet`
* Route loaders
* `useLoaderData()`
* API integration
* Reusable React components
* Tailwind CSS
* React Context API
* Dark / Light Mode implementation
* Tailwind CSS dark mode
* `localStorage` for theme persistence

## 🚀 Future Improvements

Some features I would like to add in the future:

* 🔐 Authentication
* ❌ Custom 404 page
* ⏳ Loading states
* ⚠️ Better error handling
* 🔍 GitHub user search
* 📱 Further UI improvements

## 👩‍💻 Author

**Nisha**

Learning React and building projects to improve my frontend development skills.

---

⭐ If you found this project useful, feel free to explore the repository!
