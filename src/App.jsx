import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './page/home/Home'
import Gigs from './page/gigs/Gigs'
import Gig from './page/gig/Gig'
import Orders from './page/orders/Orders'
import MyGigs from './page/myGigs/MyGigs'
import Add from './page/add/Add'
import Messages from './page/messages/Messages'
import Message from './page/message/Message'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.scss'

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App