import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*Side Bar */}
      <Sidebar />
      <div className="bg">
        
      </div>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tek Ink
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/linkedin.png"></img>
          </a>
          <a href="#">
            <img src="/instagram.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
