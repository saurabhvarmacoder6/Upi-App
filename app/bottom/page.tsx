import Link from "next/link";
import { FaBell, FaClock, FaQrcode, FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export default function Bottom(){
    return(
         <div className="border-t bg-white flex items-center justify-around py-2 ">
        
              <div>
                <Link href="/upi" className="flex flex-col items-center text-xs">
                  <FaHouse />
                  <p>Home</p>
                </Link>
              </div>
        
              <Link href="/upi/phone" className="flex flex-col items-center text-xs">
                <FaSearch />
                <p>Search</p>
              </Link>
        
              <Link href="/upi/qrcode" className="bg-cyan-700 text-white p-4 rounded-full text-xl -mt-8 shadow-lg">
                <FaQrcode />
              </Link>
        
              <div className="flex flex-col items-center text-xs">
                <FaBell />
                <p>Alerts</p>
              </div>
        
              <Link href="/upi/historysec" className="flex flex-col items-center text-xs">
                <FaClock />
                <p>History</p>
              </Link>
        
            </div>
    )
}