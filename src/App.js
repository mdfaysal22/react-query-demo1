import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AxiosFetch from "./Components/AxiosFetch/AxiosFetch";
import Home from "./Components/Home/Home";
import RQFetch from "./Components/RQFetch/RQFetch";
import TraditionFatch from "./Components/TraditionFatch/TraditionFatch";
import Main from "./layout/Main";
import {ReactQueryDevtools} from 'react-query/devtools';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/traditional-fetch",
        element: <TraditionFatch></TraditionFatch>,
      },
      {
        path: "/rq-fetch",
        element: <RQFetch></RQFetch>,
      },
      {
        path: "/axiosfetch",
        element: <AxiosFetch></AxiosFetch>,
      },
    ],
  },
]);

function App() {
  const query = new QueryClient()
  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
