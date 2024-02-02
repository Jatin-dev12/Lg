import React from "react";
import { Outlet} from "react-router-dom";
import Nav from './Pages/Nav'
import { useLocation } from "react-router-dom";
function Layout(){

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");
   // console.log(locationValue);
    
    return (
        <>
  {locationValue[1] !== ''? <Nav />: '' }
 

          

            <Outlet />

            
        </>
    );
}

export default Layout;