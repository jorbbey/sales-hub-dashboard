import { useEffect, useState } from "react";
import Leads from "@/components/Leads";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import UserDetails from "@/components/UserDetails";
import Notification from "@/components/Notification";
import MobileSideBar from "@/components/MobileSideBar";

export default function Home() {
  const [sideData, setSideData] = useState(null);
  const [leadsData, setLeadsData] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = process.env.API_URL || "http://localhost:3000"; // Local or production API

      try {
        const sideRes = await fetch(`${baseURL}/api/sidebar`);
        const leadRes = await fetch(`${baseURL}/api/leads`);

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
      <div className="container mx-auto p-4">
        <p>Error loading data. Please try again later.</p>
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
