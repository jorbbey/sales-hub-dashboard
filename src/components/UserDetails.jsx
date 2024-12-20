import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { FcMultipleCameras } from "react-icons/fc";
import { RxLinkedinLogo } from "react-icons/rx";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { HiSparkles } from "react-icons/hi2";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { RiShieldStarFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import business from "../assets/undraw_business-decisions_3x2a.svg";
import value from "../assets/undraw_make-it-rain_vyg9.svg"; 
import ideas from '../assets/undraw_ideas_41b9.svg'
import { Mail, UserCheck, Award } from "lucide-react";

const UserDetails = ({ setShowDetails, userDetails, setUserDetails }) => {
  const closeDetails = () => {
    setShowDetails(false);
    setUserDetails([]);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <section
        className="h-[80vh] overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="bg-white w-[100%] md:w-[70%] lg:w-full max-w-3xl rounded-lg shadow-xl cursor-pointer">
          {/* first nav */}
          <div className="p-1 my-4 flex items-center justify-between rounded-lg">
            <span className="flex items-center">
              <FcMultipleCameras className="mx-2 text-lg" />
              <p className="text-sm md:text-lg">
                Engage with {userDetails.name}
              </p>
            </span>
            <button
              onClick={closeDetails}
              className="text-xl text-gray-600 mx-2"
            >
              <IoClose />
            </button>
          </div>
          {/* Profile Header Section */}
          <div className="bg-white flex items-center shadow-lg rounded-lg mx-5 mt-5 p-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt={userDetails.name}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            <span className="mx-2">
              <h3 className="text-sm">{userDetails.name}</h3>
              <p className="flex items-center text-xs">
                <RxLinkedinLogo className="text-sm mr-2" />
                {userDetails.details.role}, {userDetails.details.company}
              </p>
            </span>
          </div>
          {/* main content */}
          <section className="bg-white shadow-xl p-2 my-3 rounded-lg mx-5">
            {/* popup section */}
            <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-between my-5 mx-5 rounded-lg">
              <p className="text-xs flex items-center">
                <HiSparkles className="mx-2 text-blue-600 text-sm" />
                {userDetails.name} lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <span className="mx-4 my-2 flex items-center">
                <button className="p-2 w-20 bg-white mx-3 md:mx-1 flex items-center text-xs rounded-md shadow-sm">
                  <FaPencilAlt className="mr-2 text-xs" />
                  Edit
                </button>

                <button className="p-2 w-36 bg-gradient-to-r from-blue-700 to-purple-700 mx-3 md:mx-1 flex items-center text-xs rounded-lg shadow-sm text-white">
                  <HiOutlinePaperAirplane className="mr-2 text-sm" />
                  Approve and send
                </button>
              </span>
            </div>
            {/* why i picked secton */}
            <div className="bg-gray-100 mx-5 rounded-lg p-2">
              <h4 className="text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-semibold mx-3">
                Why I picked this lead
              </h4>
              <ul className="mx-6 text-xs list-disc my-2">
                <li className="my-1">
                  {userDetails.name} is a{" "}
                  <span className="font-semibold">key descision</span> and was
                  browsing{" "}
                  <span className="font-semibold">'espreso machines'</span> on{" "}
                  {userDetails.details.company}
                </li>
                <li className="my-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li className="my-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
              </ul>

              <div className="flex flex-col md:flex-row items-center my-4">
                <span className="flex flex-col items-center bg-white mx-4 w-[80%] md:w-[30%] p-2 rounded-lg shadow-lg my-2">
                  <Image
                    src={business}
                    className="w-[6.5em] md:w-[5em] my-4 md:my-2"
                  />
                  <p className="flex md:flex-col justify-around items-center w-full text-sm md:text-xs lg:text-sm">
                    Descision Maker{" "}
                    <span className="font-bold text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text">
                      {userDetails.details.decisionMaker}
                    </span>
                  </p>
                </span>
                <span className="flex flex-col items-center bg-white mx-4 w-[80%] md:w-[30%] p-2 rounded-lg shadow-lg my-2">
                  <Image
                    src={value}
                    className="w-[5em] md:w-[3.5em] my-4 md:my-2"
                  />
                  <p className="flex md:flex-col justify-around items-center w-full text-sm md:text-xs lg:text-sm">
                    Potential deal value
                    <span className="font-bold text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text">
                      {userDetails.details.potentialDealValue}
                    </span>
                  </p>
                </span>
                <span className="flex flex-col items-center bg-white mx-4 w-[80%] md:w-[30%] p-2 rounded-lg shadow-lg my-2">
                  <Image
                    src={ideas}
                    className="w-[4em] md:w-[2.5em] my-4 md:my-2"
                  />
                  <p className="flex md:flex-col justify-around items-center w-full text-sm md:text-xs lg:text-sm">
                    Intent
                    <span className="font-bold text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text">
                      {userDetails.details.intent}
                    </span>
                  </p>
                </span>
              </div>
            </div>

            {/* footer part */}
            <div className="flex flex-col md:flex-row items-center justify-between my-4">
              <div className="flex items-center text-gray-800 my-2">
                <p className="bg-gray-300 mx-2 md:mx-1 p-1 rounded-sm shadow-sm">
                  <RiShieldStarFill className="text-yellow-500" />
                </p>
                <p className="flex items-center bg-gray-300 mx-2 md:mx-1 p-1 text-xs rounded-sm shadow-sm">
                  1
                  <FaChartPie className="mx-2 text-blue-700 text-sm" />
                  D365 sales
                </p>
                <p className="text-xs bg-gray-300 mx-2 md:mx-0 p-1 rounded-sm shadow-sm">
                  +2
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-xs text-gray-800 p-1 bg-gray-300 mx-4 rounded-sm">
                  AI generated content may be incorect
                </p>
                <span className="mx-2 flex items-center text-xs">
                  <BsHandThumbsUp className="mx-1" />
                  <BsHandThumbsDown className="mx-1" />
                </span>
              </div>
            </div>
          </section>
          {/* About section */}
          <div className="bg-white text-gray-800 mx-5 p-2 mb-10 rounded-lg shadow-lg">
            <span className="flex justify-between items-center mx-2 my-2">
              <h1 className="font-semibold text-sm">
                About {userDetails.name}
              </h1>
              <IoIosArrowDown />
            </span>
            <p className="text-xs lg:text-sm mx-2">
              {userDetails.details.summary} Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cum reiciendis ad dolor? Hic
              suscipit nihil non{" "}
            </p>
          </div>
          {/* final footer */}
          <div className="flex justify-between items-center mb-3 mx-2 cursor-pointer">
            <span className="text-xs text-gray-600 flex items-center p-1 font-semibold">
              <p className="border-r border-gray-600 pr-4">Showing 1/9</p>
              <p className="mx-3 text-blue-800">Show all</p>
            </span>

            <span className="mx-2 flex items-center text-sm">
              <BsHandThumbsUp className="mx-1 " />
              <BsHandThumbsDown className="mx-1" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
