import { FaSearch } from "react-icons/fa";
function SearchBox() {
  return (
    <div className="relative w-[343px]">
        <input type="text" placeholder="Search..." className="rounded-md bg-[#FAFAFA] w-full h-[44px] pr-2 focus:outline-none p-2 border-2 border-[#E0E0E0]"/>
        <FaSearch className=" h-[24px] w-[24px] absolute right-3 top-1 transform translate-y-1.5"/>
        
        
  
      
    </div>
  )
}

export default SearchBox
