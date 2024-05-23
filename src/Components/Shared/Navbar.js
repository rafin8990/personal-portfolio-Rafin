import Link from "next/link";
import { FcHome } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="">
      <ul className="social-icons">
        <li><Link  className="social-button text-2xl" href=""><FcHome className="icon" /> <span className="text">Home</span> </Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
