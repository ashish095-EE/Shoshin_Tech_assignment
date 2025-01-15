import { AiFillPushpin } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

function ActivityTemplate({announcement,date}) {
  return (
    <div className="w-auto h-auto bg-[#FAFAFA] rounded-md p-4 flex justify-between items-center shadow-md">
      <div className="flex flex-col gap-1 w-[405px]">
        
        <p className="break-words">{announcement}</p>
        <p className="text-xs text-gray-600">{date}</p>
      </div>

      <div className="flex gap-4">
        <AiFillPushpin className="h-[24px] w-[24px]" />
        <BsThreeDots className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}

export default ActivityTemplate;
