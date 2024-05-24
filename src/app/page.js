"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import profile from '../../public/Assets/PROFILE.png'
export default function Home() {
  const logos = [
    { src: '/logo/React.webp', alt: 'React Logo' },
    { src: '/logo/PHP.png', alt: 'php Logo' },
    { src: '/logo/typescript.png', alt: 'TypeScript Logo' },
    { src: '/logo/Nodejs.png', alt: 'Node.js Logo' },
    { src: '/logo/mongodb.webp', alt: 'Mongodb Logo' },
    { src: '/logo/Laravel.png', alt: 'Laravel Logo' },
    { src: '/logo/Mysql_logo.png', alt: 'MySQL Logo' },
    { src: '/logo/PostgreSQL.png', alt: 'postgresQL Logo' },
    { src: '/logo/redux.svg', alt: 'Redux Logo' },
  ];
  return (
    <div className="md:flex items-center justify-center ">
      
      <div className="order-2 flex justify-center md:ml-10  md:mt-0">
        <Image src={profile} ref={profile} height={200} width={300} alt="Profile"></Image>
      </div>
      <div className="order-1 p-2">
        <h1 className="text-4xl text-white">HELLO</h1>
        <h1 className="text-4xl md:text-6xl text-white">I am Rafin Hossain </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            1000,
            "Full Stack Developer",
            1000,
            "PHP Laravel Developer",
            1000,
            "Backend Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "30px", display: "inline-block", color: "white" }}
          repeat={Infinity}
        />
        <div>
       <Link href="/about"> <button className="button2">More About Me</button></Link>
        <button className="button2 mx-4 ">Download Resume</button>
        </div>
      </div>
    </div>
  );
}
