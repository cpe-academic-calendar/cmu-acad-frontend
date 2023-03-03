import { IoSearchSharp } from "react-icons/io5"
// import { data } from "../assets/mock/holidayData"

export default function Activity({data}: any) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white border-[#AAAAAA] border-[1px] drop-shadow-[10px_0px_20px_rgba(0,0,0,0.25)] w-[330px] h-[721px] rounded-[15px]">
                <div className="ml-[29px] mt-[22px]">
                    <span className="font-['Roboto'] text-2xl text-orange-400">กิจกรรม</span>
                </div>
                <div className="ml-[19px] mt-[5px] flex items-center">
                    <div>
                        <input type="text" placeholder="ค้นหา" className="w-[291px] h-[36px] border-2 border-[#AAAAAA] rounded-[30px] text-[16px] pl-[10px]"/>
                    </div>
                    <div className="-ml-8">
                        <IoSearchSharp />
                    </div>
                </div>
                {/* {data.map((item) => (
                <div className="flex ml-[19px] mt-[12px]">
                    <div className="flex items-center bg-white w-[291px] min-h-[50px] max-h-[71px] rounded-[10px] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.25)]">
                        <div>
                            <div className={item.color}/>
                        </div>
                        <div className="ml-[9px] text-[14px] mt-[5px]">
                            <p className=" mb-1 font-bold leading-[16.5px]">
                                {item.name}
                            </p>    
                            <p className="text-[14px] -mt-2 mb-[5px]">
                                {item.date}
                            </p>
                        </div>
                    </div>
                </div>    
                ))} */}
            </div>
        </div>       
    )
}