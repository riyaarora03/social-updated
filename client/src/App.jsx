import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { createBrowserRouter,
   RouterProvider,
   Route,
   Link, 
   Outlet,
   Navigate} from "react-router-dom";
import { Children, useContext } from "react";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { DarkMode } from "@mui/icons-material";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function App() {

  const {currentUser}=useContext(AuthContext);

  const {darkMode}=useContext(DarkModeContext);

  const queryClient = new QueryClient();

  const Layout = ()=>{
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          
          <RightBar/>
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute =({children})=>{
    if (!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: (
        <div>
          <Login/>
        </div>
      ),
    },
    {
      path: "/register",
      element: (
        <div>
          <Register/>
        </div>
      ),
    },
  ]);

  return (
  <div>
    <RouterProvider router={router}/>
  </div>
  );
}

export default App
