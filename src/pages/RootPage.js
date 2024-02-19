import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";


const RootPage = () => {
return(
<>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
</>
)};

export default RootPage;