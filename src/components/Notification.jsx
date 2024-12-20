import React, { useEffect, useRef } from "react";
import Image from "next/image";
import woodbank from "../assets/woodland.jpeg";
import fabrikam from "../assets/fabrikam.jpeg";
import { BsBing } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Target, Users } from "lucide-react";

const Notification = ({ data }) => {
  const sliderRef = useRef(null);

  // Scroll automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const width = sliderRef.current.clientWidth;
        sliderRef.current.scrollBy({ left: width, behavior: "smooth" });
        // Reset scroll position if at the end
        if (
          sliderRef.current.scrollLeft + width >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({
        left: direction === "next" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="lg:ml-32 lg:my-0 lg:p-6 mt-5 lg:mt-0">
      <div className=" bg-white rounded-lg shadow-xl p-2 md:p-2 lg:p-6 border border-transparent w-[100%] ">
        {/* Gradient border effect */}

        {/* Header section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center gap-2 my-2 lg:my-0">
            <BsBing className="text-xl text-blue-700" />
            <div className="text-xs md:text-sm">
              Hi Mona!
              <span className="text-blue-600 font-semibold mx-1">68%</span> of
              goal achieved. Focus on the top 20 leads to achieve the rest.
            </div>
          </div>

          <section className="w-full md:w-[80%] lg:w-[40%]">
            <div className="flex items-center gap-1 md:gap-2 text-xs">
              <span className="text-gray-600">Target:</span>
              <span className="font-semibold">$45 million</span>
              <span className="text-blue-600 font-semibold ml-auto">
                68% of target achieved
              </span>
            </div>
            <div className="flex my-2">
              <div className="h-1.5 w-20 bg-green-300 rounded"></div>
              <div className="h-1.5 w-16 bg-blue-300"></div>
              <div className="h-1.5 w-12 bg-purple-300"></div>
              <div className="h-1.5 w-8 bg-orange-300"></div>
              <div className="h-1.5 flex-1 bg-gray-200 rounded"></div>
            </div>
          </section>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-xs md:text-sm">
          The sales team has identified 20 key leads with strong purchase intent
          and active engagement.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Action items */}
          <section className="overflow-hidden flex-1">
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-scroll scroll-smooth"
            >
              {data?.users?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 bg-white shadow-xl rounded-xl p-5 w-[80%] md:w-[60%] lg:w-[45%] flex-shrink-0"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-xs">
                        • {item.details.company}
                      </p>
                    </span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-xs">
                    <button className="hover:text-blue-700 font-medium">
                      Engage with {item.name}
                    </button>
                    <p>{item.details.summary}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Users className="w-3 h-3" />
                    <span>Enterprise client</span>
                    <span>•</span>
                    <span>High buying intent</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleScroll("prev")}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() => handleScroll("next")}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </section>

          {/* Key activities */}
          <section className="w-full lg:w-[30%]">
            <h3 className="font-semibold text-gray-500 mb-4">
              Other Key Activities
            </h3>

            <div className="p-4 rounded-lg shadow-xl bg-white space-y-4 text-xs">
              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={woodbank}
                    width={30}
                    height={30}
                    alt="woodland bank"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">
                      Cafe A100 for Woodland Bank
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Wood Bank • $280,000 • 8 days to close
                    </p>
                  </div>
                </div>
                <p className="bg-gray-100 rounded-sm p-2 mt-2">
                  Review draft and reply to Chris Nadio
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <Image
                    src={fabrikam}
                    width={30}
                    height={30}
                    alt="fabrikam"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Partnership with Fabrikam</h4>
                    <p className="text-gray-400 text-xs">
                      Fabrikam • $5,000,000 • 12 days to close
                    </p>
                  </div>
                </div>
                <p className="bg-gray-100 rounded-sm p-2 mt-2">
                  Prepare me for Fabrikam meeting
                </p>
              </div>
            </div>
            <p className="text-blue-900 text-xs font-semibold mt-4">
              Show all key activities
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notification;
