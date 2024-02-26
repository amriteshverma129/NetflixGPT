import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
    },
  ]);
  return (
    <div>
      <Login></Login>
    </div>
  );
}

export default App;
