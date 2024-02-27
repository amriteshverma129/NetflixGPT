import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Browser from "./components/Browser";

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
