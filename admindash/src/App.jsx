import { MdDashboard } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdGroupWork } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import SearchBox from "./components/SearchBox";
import { IoIosNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import PostCard from "./components/PostCard";
import PostCardBig from "./components/PostCardBig";
import ActivityTemplate from "./components/ActivityTemplate";
import ActivityTemplateScheduler from "./components/ActivityTemplateScheduler";

function App() {

  const activities = [
    { schedule: "Interview with Candidate", time: "Today - 10:30 AM" },
    { schedule: "Team Meeting", time: "Tomorrow - 11:00 AM" },
    { schedule: "Client Call", time: "Next Week - 2:00 PM" }
  ];

  const announcements = [
    { announcement: "Outing Schedule for every Department from every Sector of The Industry", date: "Today 10:30 AM" },
    { announcement: "Candidate Interview For Post", date: "Today 10:30 AM" },
    { announcement: "Buying New Tables", date: "Today 13:30 AM" },
    { announcement: "Festival Celebration Bonus", date: "Today 11:30 AM" }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-[#FAFAFA] w-[90px] md:w-[90px] xl:w-[242px] min-h-screen p-5 flex flex-col gap-12 border-2 border-r-[#FAFAFA]">
        <div className="bg-white">
          <img src="./image.png" className="bg-[#FAFAFA] " />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {/* Sidebar Item */}
            <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
              <MdDashboard className="text-2xl" />
              {/* Label for xl */}
              <p className="hidden xl:block text-[16px] font-light text-[#686868]">Dashboard</p>
              {/* Tooltip for md and below */}
              <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
                Dashboard
              </p>
            </div>


            <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
              <HiUserAdd className="text-2xl" />
              {/* Label for xl */}
              <p className="hidden xl:block text-[16px] font-light text-[#686868]">Recruitment</p>
              {/* Tooltip for md and below */}
              <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
                Recruitment
              </p>
            </div>

            <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
              <RiCalendarScheduleFill className="text-2xl" />
              {/* Label for xl */}
              <p className="hidden xl:block text-[16px] font-light text-[#686868]">Schedule</p>
              {/* Tooltip for md and below */}
              <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
                Schedule
              </p>
            </div>

            <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
              <FaUsers className="text-2xl" />
              {/* Label for xl */}
              <p className="hidden xl:block text-[16px] font-light text-[#686868]">Employee</p>
              {/* Tooltip for md and below */}
              <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
                Employee
              </p>
            </div>

            <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
              <MdGroupWork className="text-2xl" />
              {/* Label for xl */}
              <p className="hidden xl:block text-[16px] font-light text-[#686868]">Department</p>
              {/* Tooltip for md and below */}
              <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
                Department
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
            <TfiHeadphoneAlt className="text-2xl" />
            <p className="hidden xl:block text-[16px] font-light text-[#686868]">Support</p>
            <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
              Support
            </p>
          </div>

          <div className="group relative flex items-center xl:gap-3 xl:flex-row flex-col">
              <IoSettings className="text-2xl" />
              {/* Label for xl */}
              <p className="hidden xl:block text-[16px] font-light text-[#686868]">Settings</p>
              {/* Tooltip for md and below */}
              <p className="absolute left-[100%] top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300 xl:hidden">
                Settings
              </p>
            </div>
        </div>
      </div>

      {/* DashboardSide */}
      <div className="bg-[#FFFFF] w-full min-h-screen flex flex-col">
        {/* Top Bar */}
        <div className="h-[91px] w-full border-b border-b-slate-300 flex justify-between items-center p-5">
          <div>
            <SearchBox />
          </div>

          <div className="flex flex-row gap-5 items-center ml-10">
            <IoIosNotifications className="text-xl flex-shrink-0 h-[24px] w-[24px]" />
            <MdMessage className="text-xl flex-shrink-0 h-[24px] w-[24px]" />
            <img src="vite.svg" className="rounded-full bg-slate-950 h-[42px] w-[42px] flex-shrink-0" />
            <p className="flex-shrink-0 text-[16px] leading-[24px] font-semibold">Jhon Doe</p>
            {/* dropDown */}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-10 flex flex-wrap gap-4">
          {/* Left Section */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-[62px] w-full">
              <h1 className="text-[24px] leading-[42px] font-semibold">Dashboard</h1>
            </div>
            
            <div className="flex gap-3">
              <PostCard color="bg-[#FFEFE7]" title="Available Positon" midBody="24" textColor="text-[#FF5151]" foot="4 Urgently needed" />
              <PostCard color="bg-[#E8F0FB]" title="Job Open" midBody="17" textColor="text-[#3786F1]" foot="4 Active hiring" />
              <PostCard color="bg-[#FDEBF9]" title="New Employee" midBody="12" textColor="text-[#EE61CF]" foot="4 Department" />
              
              
            </div>

            <div className="flex gap-3">
              <PostCardBig />
              <PostCardBig />
            </div>

            <div className="h-[344px] w-[640px] border-2 border-[#FAFAFA] rounded-lg p-4">
  {/* Title Section */}
              <div className="flex justify-between mb-4">
                <h2 className="text-[18px] leading-[28px] font-semibold">Announcement</h2>
                <p className="border shadow-sm rounded-md pl-2 pr-2 text-[12px] leading-[28px] text-[#686868] font-medium">Today, 13 Sep 2021</p>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-scroll h-[270px]">
                <div className="flex flex-col gap-2">
                  {announcements.map((announcementItem, index) => (
                    <ActivityTemplate
                      key={index}
                      announcement={announcementItem.announcement}
                      date={announcementItem.date}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="w-auto flex flex-col gap-5 mt-20">
            <div className="h-[258px] w-[427px] bg-[#1B204A] border border-slate-500 rounded-lg p-4 flex flex-col gap-2 justify-between shadow-sm text-white">
              <div className="w-full border-b  border-b-[#404576] text-[18px] leading-[28px] font-semibold">Recent Activities</div>
              <div className="flex flex-col gap-2 w-[340px] h-[92px] mb-4">
                <div className="text-[10px] leading-[11.72px] text-slate-400 font-semibold">10:40 AM, Fri 10 Sept 2021</div>
                <div>
                  <h1 className="text-[18px] leading-[28px] font-semibold">You Posted A New Job</h1>
                </div>
                <div>
                  <p className="text-[14px]leading-[20px] font-thin text-slate-500">The announcements array contains objects with announcement and date properties for</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] leading-[21px] text-slate-200 ">Today You make 12 Activities</p>
                <button className="h-[38px] w-[139px] rounded-md bg-red-500 text-white text-[14px] leading-[21px] font-semibold border-[#161E54]">See All Activity</button>
              </div>
              
            </div>
            
            <div className="h-[424px] w-[427px] border-2 border-[#FAFAFA] rounded-lg p-4">
              {/* Title Section */}
              <div className="flex justify-between mb-4">
                <h1 className="text-[18px] leading-[28px] font-semibold">Upcoming Schedule</h1>
                <p className="border shadow-sm rounded-md pl-2 pr-2 text-[12px] leading-[28px] text-[#686868] font-medium">Today, 13 Sep 2021</p>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-scroll h-[360px]">
                <div className="flex flex-col gap-2">
                  {/* Priority Section */}
                  <h3 className="text-[14px] leading-[28px] text-[#686868]">Priority</h3>
                  <ActivityTemplateScheduler schedule="Event Discussion with Client and Fiends" time="Today-8:00 AM" />

                  {/* Other Activities */}
                  <h3 className="text-[14px] leading-[28px] text-[#686868] mt-4">Others</h3>
                  {activities.map((activity, index) => (
                    <ActivityTemplateScheduler
                      key={index}
                      schedule={activity.schedule}
                      time={activity.time}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
