import { BsThreeDots } from "react-icons/bs"


function ActivityTemplateScheduler({schedule,time}) {
  return (
    <div className="w-auto h-auto bg-[#FAFAFA] rounded-md p-4 flex justify-between items-center shadow-md">
          <div className="flex flex-col gap-1 w-[405px]">
            {/* Ensure the text wraps properly, no need to hide overflow */}
            <p className="break-words text-[16px] leading-[28px] text-[#303030]">{schedule} </p>
            <p className="text-[10px] leading-[14px] text-[#686868] font-thin">{time}</p>
          </div>
    
          <div className="flex gap-4">
            
            <BsThreeDots className="h-[24px] w-[24px]" />
          </div>
        </div>
  )
}

export default ActivityTemplateScheduler
