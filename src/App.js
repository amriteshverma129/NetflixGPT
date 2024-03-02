import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Browser from "./components/Browser";
import GPTSearch from "./components/GPTSearch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browser",
          element: <Browser />,
        },
        {
          path: "/GPTSearch",
          element: <GPTSearch />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
