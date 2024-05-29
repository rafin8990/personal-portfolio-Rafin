"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import profile from "../../public/Assets/PROFILE.png";
import Baits from "../../public/logo/BAITS.png";
import Timeline from "@/Components/HomeComponent/Timeline";

export default function Home() {
  const logos = [
    { src: "/logo/React.webp", alt: "React Logo" },
    { src: "/logo/PHP.png", alt: "php Logo" },
    { src: "/logo/typescript.png", alt: "TypeScript Logo" },
    { src: "/logo/Nodejs.png", alt: "Node.js Logo" },
    { src: "/logo/mongodb.webp", alt: "Mongodb Logo" },
    { src: "/logo/Laravel.png", alt: "Laravel Logo" },
    { src: "/logo/Mysql_logo.png", alt: "MySQL Logo" },
    { src: "/logo/PostgreSQL.png", alt: "postgresQL Logo" },
    { src: "/logo/redux.svg", alt: "Redux Logo" },
  ];
  return (
    <div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="pt-10 pb-5 md:py-32 md:flex items-center justify-center ">
        <div className="order-2 flex justify-center md:ml-10  md:mt-0">
          <Image
            src={profile}
            ref={profile}
            height={200}
            width={300}
            alt="Profile"
          ></Image>
        </div>
        <div className="order-1 p-2">
          <h1 className="text-4xl text-white">HELLO</h1>
          <h1 className="text-4xl md:text-6xl text-white">
            Meet Rafin Hossain{" "}
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1000,
              "Full Stack Developer",
              1000,
              "PHP Laravel Developer",
              1000,
              "Software Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "30px",
              display: "inline-block",
              color: "white",
            }}
            repeat={Infinity}
          />
          <div>
            <Link href="/about">
              {" "}
              <button className="button2 text-black">More About Me</button>
            </Link>
            <button className="button2 mx-4 text-black ">
              Download Resume
            </button>
          </div>
          <div className="flex gap-5 mt-3">
            <Link
              href="https://www.facebook.com/Rafin.Hossain.19614"
              className="text-white text-4xl mt-2"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rafin-hossain/"
              className="text-white text-4xl mt-2"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/rafin8990"
              className="text-white text-4xl mt-2"
            >
              <FaGithub />
            </Link>
            <a href="tel:+8801984419614" className="text-white text-4xl mt-2">
              <FaPhone />
            </a>
            <a
              href="mailto:rafin.hossain.8990@gmail.com"
              className="text-white text-4xl mt-2"
            >
              <FaMailBulk />
            </a>
          </div>
        </div>
      </div>
      <div className=" gradient-box bg-gradient-to-br from-[#212670] via-[#7e05ff] to-[#030005]  py-10">
        <div className=" pt-5 pb-10 ">
          <p className=" text-white text-sm text-center">
            What I Have Done So Far
          </p>
          <h1 className="text-2xl md:text-5xl text-center font-bold text-white mt-2">
            ____Work Experiences____
          </h1>
        </div>
        <div className="px-5 md:px-10 lg:px-20">
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
}
