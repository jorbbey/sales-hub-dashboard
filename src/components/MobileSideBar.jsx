import { useEffect, useRef, useState } from "react";

const MobileSideBar = ({data}) => {
    const [sections, setSections] = useState([]);
    

     const iconComponents = {
    IoMenuOutline: require("react-icons/io5").IoMenuOutline,
    TiHomeOutline: require("react-icons/ti").TiHomeOutline,
    CiClock2: require("react-icons/ci").CiClock2,
    BsPinAngle: require("react-icons/bs").BsPinAngle,
    IoIosArrowDown: require("react-icons/io").IoIosArrowDown,
    LuRocket: require("react-icons/lu").LuRocket,
    MdOutlineDashboard: require("react-icons/md").MdOutlineDashboard,
    BsClipboardCheck: require("react-icons/bs").BsClipboardCheck,
    CiFileOff: require("react-icons/ci").CiFileOff,
    LuUserRound: require("react-icons/lu").LuUserRound,
    TbPhoneCalling: require("react-icons/tb").TbPhoneCalling,
    FaRegFile: require("react-icons/fa").FaRegFile,
    RiUserStarLine: require("react-icons/ri").RiUserStarLine,
    LuFileBadge2: require("react-icons/lu").LuFileBadge2,
    LuFileBox: require("react-icons/lu").LuFileBox,
    LuFileAxis3D: require("react-icons/lu").LuFileAxis3D,
    FiBox: require("react-icons/fi").FiBox,
    LuNotebook: require("react-icons/lu").LuNotebook,
    MdOutlineFileOpen: require("react-icons/md").MdOutlineFileOpen,
    MdOutlineCampaign: require("react-icons/md").MdOutlineCampaign,
     };
    
      useEffect(() => {
    if (data) {
      const updatedSections = Object.entries(data).map(([section, items]) => ({
        sectionName: section,
        items: items.map((item) => ({
          icon: iconComponents[item.icon] || null,
          text: item.text,
          after: iconComponents[item.after] || null,
        })),
      }));
      setSections(updatedSections);
      // Access the div with id 'mainDiv' if 'Leads' is part of the data
      const mainDiv = document.getElementById("mainDiv");
      if (mainDiv) {
        // console.log('Div with ID "mainDiv" accessed:', mainDiv);
         mainDiv.focus()
      }
    }
  }, [data]);


  return (
     <aside className="fixed lg:hidden w-48 bg-gray-100 text-gray-800 text-xs h-full top-0 left-0 overflow-y-auto shadow-lg">
      {/* <div className="p-4 border-b border-gray-700">
        <h1 className="text-lg font-semibold text-gray-800">Sales Hub</h1>
      </div> */}
      <nav className="flex flex-col gap-2 p-4">
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Section Header */}
              <h2 className="text-xs font-semibold capitalize pl-2 mb-2">
                {section.sectionName}
              </h2>
              {/* Section Items */}
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  tabIndex="0"
                  id={item.text === "Leads" ? "mainDiv" : undefined}
                  className="flex items-center p-3 cursor-pointer transition duration-200 focus:bg-white focus:outline-none focus:border-l-2 focus:border-blue-500"
                >
                  {/* Icon */}
                  {item.icon && <item.icon className="mr-3" />}
                  {/* Text */}
                  <p className="font-medium">{item.text}</p>
                  {/* After Icon */}
                  {item.after && <item.after className="ml-auto" />}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="p-4">No items available</p>
        )}
        {/* <div className="p-4 border-b border-gray-700">
          <h1 className="text-lg font-semibold text-gray-800">Performance</h1>
        </div> */}
      </nav>
    </aside>
  )
}

export default MobileSideBar
 