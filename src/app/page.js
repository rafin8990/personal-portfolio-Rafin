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
      <div className="md:flex items-center justify-center ">
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
            I am Rafin Hossain{" "}
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
              <button className="button2">More About Me</button>
            </Link>
            <button className="button2 mx-4 ">Download Resume</button>
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
      <div>
        <h1 className="text-3xl text-white mx-10">Experiences : _______</h1>
        <div className="mx-10 mt-5 pb-5">
          <div className="md:flex justify-around items-center">
            <div>
              <h1 className="text-white text-2xl font-semibold">
                Company Name: Bangladesh Associate of IT Solutions (BAITS)
              </h1>
              <h3 className="text-xl font-semibold text-white mt-1">
                Location: Alba Tower , 6th floor , Pallabi, Mirpur , Dhaka
                Bangladesh (Onsite)
              </h3>
              <h3 className="text-xl font-semibold text-white mt-1">
                Position: Software Developer
              </h3>
              <p className="text-white mt-1">Start Date: November 2023</p>
              <p className="text-white mt-1">End Date: Currently work here</p>
              <p className="text-white mt-1">
                Technology: PHP, Laravel, Node JS, Express JS , React, Next JS,
                MongoDB, MySQL, PostgreSQL
              </p>
            </div>
            <div>
              <Image
                src={Baits}
                ref={Baits}
                height={200}
                width={300}
                alt="Profile"
              ></Image>
            </div>
          </div>
          <div className="mt-10 md:flex justify-around items-center">
          
            <div>
              <h1 className="text-white text-2xl font-semibold">
                Company Name: Swachh Akshar(Inginious Solutions)
              </h1>
              <h3 className="text-xl font-semibold text-white mt-1">
                145, Zone 2, GRP Colony, MP Nagar, Bhopal, MP -4620001 (Remote)
              </h3>
              <h3 className="text-xl font-semibold text-white mt-1">
                Position: MERN Stack Developer (Internship)
              </h3>
              <p className="text-white mt-1">Start Date: February 2023</p>
              <p className="text-white mt-1">End Date: October 2023</p>
              <p className="text-white mt-1">
                Technology: PHP, Laravel, Node JS, Express JS , React, Next JS,
                MongoDB, MySQL, PostgreSQL
              </p>
            </div>
            <div>
              <Image
                src={Baits}
                ref={Baits}
                height={200}
                width={300}
                alt="Profile"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
