function PostCardBig() {
    return (
      <div className="h-[190px] w-[312px] border border-gray-200 rounded-md shadow-md p-5 flex flex-col justify-between bg-white">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[18px] font-semibold text-black-600 leading-[28px]">Total Employees</h2>
            <p className="text-[56px] font-bold text-gray-900 leading-[64px]">216</p>
            <div className="text-sm text-gray-500">
              <p>120 Men</p>
              <p>96 Women</p>
            </div>
          </div>
          <div className="relative w-[60px] h-[40px]">
            {/* SVG for the curve */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 40"
              className="absolute top-0 left-0"
            >
              <path
                d="M0 30 C15 10, 45 10, 60 30"
                stroke="#FF5A5F"
                fill="none"
                strokeWidth="2"
              />
              <path
                d="M0 30 C15 10, 45 10, 60 30 L60 40 L0 40 Z"
                fill="rgba(255, 90, 95, 0.1)"
              />
            </svg>
            <p className="absolute text-[10px] font-medium text-red-500 top-[-10px] right-[-5px]">
              +2%
            </p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div>
          <p className="bg-rose-100 text-rose-500 text-xs py-1 px-3 rounded-lg inline-block">
            +2% Past month
          </p>
        </div>
      </div>
    );
  }
  
  export default PostCardBig;
  