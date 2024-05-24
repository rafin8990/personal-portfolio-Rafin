"use client";
import Link from "next/link";
import { FcAbout, FcContacts, FcEngineering, FcHome, FcIdea, FcVideoProjector } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <button className="Btn">
              <div className="sign">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 15 20"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <FcHome></FcHome>
                </svg>
              </div>

              <div className="text">Home</div>
            </button>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/about">
            <button className="Btn">
              <div className="sign">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 15 20"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <FcAbout></FcAbout >
                </svg>
              </div>

              <div className="text">About</div>
            </button>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/skills">
            <button className="Btn">
              <div className="sign">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 15 20"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <FcIdea></FcIdea  >
                </svg>
              </div>
              <div className="text">Skills</div>
            </button>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/projects">
            <button className="Btn">
              <div className="sign">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 15 20"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <FcEngineering></FcEngineering  >
                </svg>
              </div>
              <div className="text">Projects</div>
            </button>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/contact">
            <button className="Btn">
              <div className="sign">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 15 20"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <FcContacts></FcContacts  >
                </svg>
              </div>
              <div className="text">Contact</div>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
