import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cart, CheckOut, Error, HomeLayout, Landing,  
  Login, Register, SinlgeProduct, Products, Orders } from "./Pages";

import ErrorElement from "./Components/ErrorElement";

import { loader as LandingLoader } from "./Pages/Landing";
import { loader as SingleLoader } from "./Pages/SinlgeProduct";
import { loader as productsLoader } from "./Pages/Products";
import { loader as CheckoutLoader } from "./Pages/Checkout";
import { loader as OrdersLoader } from "./Pages/Orders";

import { action as registerAction } from "./Pages/Register";
import { action as loginAction } from "./Pages/Login";
import { actions as checkoutForm } from "./Components/CheckoutForm";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader(queryClient),
      },
      {
        path: 'products/:id',
        element: <SinlgeProduct />,
        errorElement: <ErrorElement />,
        loader: SingleLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <CheckOut />,
        loader: CheckoutLoader,
        action: checkoutForm,
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: OrdersLoader,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* ToastContainer added at the top of the app with 3000ms limit */}
      <ToastContainer
        position="top-right"
        autoClose={1000}  // Auto close after 3000ms
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
