const experiences = [
  {
    companyName: "Bangladesh Associate Of IT Solutions",
    position: "Software Developer",
    duration: "November 2023 - Present",
    technologies:
      "PHP, Laravel, Node JS, Express JS , React, Next JS, MongoDB, MySQL, PostgreSQL",
    address:
      " Alba Tower , 6th floor , Pallabi, Mirpur , Dhaka Bangladesh (Onsite)",
  },
  {
    companyName: "Swachh Akshar(Inginious Solutions)",
    position: "MERN Stack Developer",
    duration: "February 2023 - October 2023",
    technologies:
      "Node JS, Express JS , React, Next JS, MongoDB, MySQL, PostgreSQL",
    address: " 145, Zone 2, GRP Colony, MP Nagar, Bhopal, MP -4620001 (Remote)",
  },
];
const Timeline = () => {
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((data, index) => (
          <li
            key={index}
            className="mb-10 ms-4 rounded-lg bg-gradient-to-br from-[#c988f4] via-[#7e05ff] to-[#E1AEFD] p-5"
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-black dark:text-gray-500">
              {data?.duration}
            </time>
            <h3 className="text-lg font-semibold text-white dark:text-white">
              {data?.position}
            </h3>
            <h3 className="text-lg font-semibold text-white dark:text-white">
              {data?.companyName}
            </h3>
            <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
              Technologies: {data?.technologies}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
