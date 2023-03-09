import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer";
 
const Layout = ({ children }) => (
  <div>
    <Navbar/>
      {children}
    {/* <Footer /> */}
  </div>
);
 
export default Layout;