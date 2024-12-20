
export default function handler(req, res) {
  res.status(200).json({
    general : [
      { icon: "TiHomeOutline", text: "Home" },
      { icon: "CiClock2", text: "Recent", after: "IoIosArrowDown" },
      { icon: "BsPinAngle", text: "Pinned", after: "IoIosArrowDown" },
    ],
    myWork: [
      { icon: "LuRocket", text: "Sales accelerator" },
      { icon: "MdOutlineDashboard", text: "Dashboards" },
      { icon: "BsClipboardCheck", text: "Activities" },
    ],
    customers: [
      { icon: "CiFileOff", text: "Accounts" },
      { icon: "LuUserRound", text: "Contacts" },
    ],
    sales: [
      { icon: "TbPhoneCalling", text: "Leads" },
      { icon: "FaRegFile", text: "Opportunities" },
      { icon: "RiUserStarLine", text: "Competitors" },
    ],
    collateral: [
      { icon: "LuFileBadge2", text: "Quotes" },
      { icon: "LuFileBox", text: "Orders" },
      { icon: "LuFileAxis3D", text: "Invoices" },
      { icon: "FiBox", text: "Products" },
      { icon: "LuNotebook", text: "Sales Literature" },
    ],
    marketing: [
      { icon: "MdOutlineFileOpen", text: "Marketing lists" },
      { icon: "MdOutlineCampaign", text: "Quick Campaigns" },
    ],
    performance: [
      { icon: "LuNotebook", text: "Sales", after: "IoIosArrowDown" },
    ],
  });
}
