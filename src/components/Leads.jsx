import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Leads = ({ data, setShowDetails, setUserDetails }) => {
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [hoveredLead, setHoveredLead] = useState(null); // State for the hovered lead

  // Handle checkbox toggle
  const handleCheckboxChange = (leadName) => {
    setSelectedLeads((prevSelected) =>
      prevSelected.includes(leadName)
        ? prevSelected.filter((name) => name !== leadName)
        : [...prevSelected, leadName]
    );
  };

  const seeDetails = (item) => {
    setShowDetails(true);
    setUserDetails(item);
  };

  // Filter data based on search query
  const filteredLeads = data?.users?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="lg:ml-32 flex-1 lg:p-4 my-5 md:my-0">
      {/* Search Input */}
      <div className="mb-4 mt-3">
        <input
          type="text"
          placeholder="Search leads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[100%] md:w-[50%] lg:w-[30%] border border-gray-300 rounded-md p-1"
        />
      </div>

      {/* Table or Leads Content */}
      <div className="bg-white rounded-md shadow-md p-4 relative">
        {/* Table Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-b font-semibold text-gray-700 p-2 text-xs">
          <span className="flex items-center">
            Name
            <i className="text-sm p-1">
              <IoIosArrowDown />
            </i>
          </span>
          <span className="flex items-center">
            Topic
            <i className="text-sm p-1">
              <IoIosArrowDown />
            </i>
          </span>
          <span className="hidden sm:flex items-center w-32">
            Status reason
            <i className="text-sm p-1">
              <IoIosArrowDown />
            </i>
          </span>
          <span className="hidden md:flex items-center w-32">
            Created on
            <i className="text-sm p-1">
              <IoIosArrowDown />
            </i>
          </span>
        </div>

        {/* Table Rows */}
        <div>
          {filteredLeads?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-2 border-b hover:bg-gray-100 text-xs cursor-pointer relative"
              onClick={() => seeDetails(item)}
              onMouseEnter={() => setHoveredLead(item)}
              onMouseLeave={() => setHoveredLead(null)}
            >
              <span className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 sm:mr-4"
                  onChange={() => handleCheckboxChange(item.name)}
                />
                {item.name}
              </span>
              <span className="truncate">{item.topic}</span>
              <span className="hidden sm:block">{item.status}</span>
              <span className="hidden md:block">{item.date}</span>

              {/* Tooltip */}
              {hoveredLead === item && (
                <div className="absolute top-10 left-4 bg-gray-800 text-white text-sm rounded-md p-2 shadow-md z-10">
                  <p>
                    <strong>Deal Value:</strong>{" "}
                    {item.details.potentialDealValue || "N/A"}
                  </p>
                  <p>
                    <strong>Decision Maker:</strong>{" "}
                    {item.details.decisionMaker || "N/A"}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* No Results Found */}
          {filteredLeads?.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No leads found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Leads;
