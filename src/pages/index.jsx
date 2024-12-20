import { useEffect, useState } from "react";
import Image from "next/image";
import Leads from "@/components/Leads";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import UserDetails from "@/components/UserDetails";
import Notification from "@/components/Notification";
import MobileSideBar from "@/components/MobileSideBar";
import searchImg from '../assets/undraw_searching_no1g.svg'

export default function Home() {
  const [sideData, setSideData] = useState(null);
  const [leadsData, setLeadsData] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data directly from the local API (no need for an external API URL)
        const sideRes = await fetch("/api/sidebar");
        const leadRes = await fetch("/api/leads");

        if (!sideRes.ok || !leadRes.ok) {
          throw new Error(
            `HTTP Error!, status: ${sideRes.status} || ${leadRes.status}`
          );
        }

        const sideData = await sideRes.json();
        const leadsData = await leadRes.json();

        setSideData(sideData);
        setLeadsData(leadsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!sideData || !leadsData) {
    return (
      <div className="container w-[50%] bg-white shadow-xl rounded-lg m-auto my-10 p-4">
        <Image src={searchImg} alt="searching" className="my-4 mx-auto" />
      </div>
    );
  }

  return (
    <div className="h-full container mx-auto p-4 bg-gray-100">
      <TopBar
        setToggleMobileNav={setToggleMobileNav}
        toggleMobileNav={toggleMobileNav}
      />
      {toggleMobileNav && <MobileSideBar data={sideData} />}
      <Sidebar data={sideData} />
      <Notification data={leadsData} />
      {showDetails && (
        <UserDetails
          setShowDetails={setShowDetails}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
      <Leads
        data={leadsData}
        setShowDetails={setShowDetails}
        setUserDetails={setUserDetails}
      />
    </div>
  );
}
