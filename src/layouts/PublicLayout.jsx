import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/NavBar/navBar";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}