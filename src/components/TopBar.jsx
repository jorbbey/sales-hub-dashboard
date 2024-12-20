import { IoIosArrowDown } from "react-icons/io";
import { LuSquareChartGantt } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { VscRefresh } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaChartPieSolid } from "react-icons/lia";
import { MdFilterList } from "react-icons/md";
import { LuColumns3 } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";

const TopBar = ({ setToggleMobileNav, toggleMobileNav }) => {
  const navData = [
    { icon: LuSquareChartGantt, text: "Show charts" },
    { icon: TfiMenuAlt, text: "Focused view" },
    { icon: FaPlus, text: "New" },
    { icon: VscRefresh, text: "Refresh" },
    { icon: BsMicrosoftTeams, text: "Collaborate" },
    { icon: RiDeleteBin6Line, text: "Delete" },
  ];
  const btnData = [
    { icon: LiaChartPieSolid, text: "Smart Data" },
    { icon: MdFilterList, text: "Edit Filters" },
    { icon: LuColumns3, text: "Edit Columns" },
  ];

  const handleClick = () => {
    setToggleMobileNav(!toggleMobileNav)
  }

  return (
    <nav className=" lg:ml-36 flex flex-wrap items-center p-2 shadow-lg rounded-lg cursor-pointer">
      <div className="flex-1 p-1 text-xs w-[5%]">
        <span className="flex items-center">
          My Open leads
          <i className="text-sm p-1">
            <IoIosArrowDown />
          </i>
        </span>
      </div>

      <div className="flex flex-wrap justify-around items-center text-xs lg:w-[50%]">
        {navData.map((item, index) => (
          <div key={index} className="relative group flex items-center p-1">
            <i className="text-sm mr-1">
              <item.icon />
            </i>
            {/* Tooltip */}
            <p className="hidden lg:inline">{item.text}</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block lg:hidden">
              {item.text}
            </span>
          </div>
        ))}
        <i className="text-sm mr-1 flex items-center ">
          <IoIosArrowDown className="ml-1" />
          <BsThreeDotsVertical className="hidden md:block ml-2" />
          <IoIosMenu className="block md:hidden text-2xl" onClick={handleClick} />
        </i>
      </div>

      <div className="hidden md:flex flex-wrap justify-between items-center text-xs lg:mr-4 lg:w-[28%]">
        {btnData.map((item, index) => (
          <div key={index} className="relative group flex items-center p-1">
            <button className="flex items-center p-1 border border-gray-400 rounded-lg shadow-lg">
              <i className="text-sm mr-1">
                <item.icon />
              </i>
              <p className="hidden lg:inline">{item.text}</p>
            </button>
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block lg:hidden">
              {item.text}
            </span>
          </div>
        ))}
        <IoIosMenu className="block lg:hidden text-2xl" onClick={handleClick} />
      </div>
    </nav>
  );
};

export default TopBar;
