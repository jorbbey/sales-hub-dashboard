import { useEffect, useState } from "react";
import Leads from "@/components/Leads";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import UserDetails from "@/components/UserDetails";
import Notification from "@/components/Notification";
import MobileSideBar from '@/components/MobileSideBar'
  
  export async function getStaticProps() {
    const baseURL = "http://localhost:3000";

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

      return {
        props: {
          sideData,
          leadsData,
        },
      };
    } catch (error) {
      console.error(`Error fetching data:`, error);
      return {
        props: {
          sideData: null,
          leadsData: null,
        },
      };
    }
  }



export default function Home({ sideData, leadsData }) {
  const [showDetails, setShowDetails] = useState(null);
  const [userDetails, setUserDetails] = useState({})
  const [showNotifications, setShowNotifications] = useState(null)
  const [toggleMobileNav, setToggleMobileNav] = useState(false)
  if (!sideData || !leadsData) {
    return (
      <div className="container mx-auto p-4">
        <p>Error loading data. Please try again later.</p>
      </div>
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
     setShowNotifications(true)
    })
    
    return ()=> clearTimeout(timer)
  }, [])
  

  return (
    <div className=" h-full container mx-auto p-4 bg-gray-100">
      <TopBar setToggleMobileNav={setToggleMobileNav} toggleMobileNav={toggleMobileNav} />
      {toggleMobileNav && (<MobileSideBar data={sideData} />)}
      <Sidebar data={sideData} />
      {showNotifications && (<Notification data = {leadsData} />)}
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
