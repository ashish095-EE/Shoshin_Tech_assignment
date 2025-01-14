
function PostCard({color,textColor,title,midBody,foot}) {
  return (
    <div className="">
        <div className={`h-[136px] w-[204px] ${color} rounded-lg shadow-sm flex flex-col justify-between p-4`}>
            <div>
                <h1 className="text-[18px] font-semibold text-black-600 leading-[28px]">{title}</h1>

            </div>
            <div>
                <h2 className="text-[48px] font- text-gray-900 leading-[64px]">{midBody}</h2>

            </div>
            <div>
                <h3 className={`text-[16px] font-thin ${textColor} leading-[24px]`}>{foot}</h3>

            </div>
        </div>
        
      
    </div>
  )
}

export default PostCard
