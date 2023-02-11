import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import RQFetch from "./Components/RQFetch/RQFetch";
import TraditionFatch from "./Components/TraditionFatch/TraditionFatch";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/traditional-fetch',
        element: <TraditionFatch></TraditionFatch>
      },
      {
        path: '/rq-fetch',
        element: <RQFetch></RQFetch>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
