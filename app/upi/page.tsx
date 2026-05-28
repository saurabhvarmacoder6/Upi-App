import { FaArrowAltCircleRight, FaSimCard } from "react-icons/fa";
import { FaCar, FaHouse, FaMobile, FaLightbulb, FaMoneyBill1Wave, FaMoneyCheck, FaQuestion, FaQrcode, FaUser, FaUserCheck } from "react-icons/fa6";
import Link from "next/link";

export default function Upi() {
    return (
        <>
            {/* Top Image Section */}
            <div className="relative">

                <div className="absolute top-4 left-4 right-4 flex justify-between z-10">

                    <Link className="bg-yellow-400 text-white p-2 rounded-md text-lg" href="/upi/qr">
                        <FaQrcode />
                    </Link>

                    <div className="border-2 border-white text-white rounded-full size-7 flex items-center justify-center">
                        <FaQuestion />
                    </div>

                </div>

                <img
                    src="/upi.jpg"
                    alt="UPI"
                    className="w-full h-57.5 object-cover"
                />
            </div>

            {/* Money Transfer */}
            <div className="p-4">

                <h1 className="text-lg font-semibold">
                    Money Transfers
                </h1>

                <div className="grid grid-cols-4 gap-4 mt-4">

                    <div className="flex flex-col items-center text-center">
                        <Link href="/upi/phone">
                            <div className="size-14 rounded-full bg-cyan-700 text-white flex items-center justify-center text-2xl">
                                <FaMobile />
                            </div>
                        </Link>

                        <p className="text-xs font-medium mt-2">
                            To Mobile Number
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Link href="/upi/bank">
                            <div className="size-14 rounded-full bg-cyan-700 text-white flex items-center justify-center text-2xl">
                                <FaHouse />
                            </div>
                        </Link>
                        <p className="text-xs font-medium mt-2">
                            To Bank / UPI
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Link href="/upi/selfbank">
                            <div className="size-14 rounded-full bg-cyan-700 text-white flex items-center justify-center text-2xl">
                                <FaUserCheck />
                            </div>
                        </Link>
                        <p className="text-xs font-medium mt-2">
                            Self Account
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <Link href="/upi/checkbalance">
                            <div className="size-14 rounded-full bg-cyan-700 text-white flex items-center justify-center text-2xl">
                                <FaMoneyCheck />
                            </div>
                        </Link>
                        <p className="text-xs font-medium mt-2">
                            Check Balance
                        </p>
                    </div>

                </div>

            </div>

            {/* Gold Banner */}
            <div className="px-3">

                <div className="bg-cyan-700 rounded-lg p-2 border border-cyan-800">

                    <div className="border border-white rounded-md p-1 text-white flex items-center gap-2">

                        <img
                            src="/gold.png"
                            alt="gold"
                            className="size-6"
                        />

                        <span className="text-sm font-semibold">
                            Buy 24k Gold instantly
                        </span>

                    </div>

                </div>

            </div>

            {/* Recharge Section */}
            <div className="p-4">

                <h1 className="text-lg font-semibold">
                    Recharge & Bills
                </h1>

                <div className="grid grid-cols-4 gap-4 mt-4">

                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-12 rounded-lg bg-cyan-700 text-white flex items-center justify-center text-2xl">
                            <FaMobile />
                        </div>
                        <p className="text-xs mt-2 font-medium">
                            Mobile Recharge
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-12 rounded-lg bg-cyan-700 text-white flex items-center justify-center text-2xl">
                            <FaCar />
                        </div>
                        <p className="text-xs mt-2 font-medium">
                            Fastag Recharge
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-12 rounded-lg bg-cyan-700 text-white flex items-center justify-center text-2xl">
                            <FaLightbulb />
                        </div>
                        <p className="text-xs mt-2 font-medium">
                            Electricity Bill
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-12 rounded-lg bg-cyan-700 text-white flex items-center justify-center text-2xl">
                            <FaMoneyBill1Wave />
                        </div>
                        <p className="text-xs mt-2 font-medium">
                            Loan Repayment
                        </p>
                    </div>

                </div>

            </div>

            <div className="flex gap-2 p-3">

                <button className="flex-1 border rounded-lg p-3 flex items-center justify-between text-xs font-semibold">
                    Buy Jio SIM
                    <FaSimCard className="text-red-600 text-xl" />
                </button>

                <button className="border rounded-lg px-4 text-sm font-semibold flex items-center gap-2">
                    More
                    <FaArrowAltCircleRight />
                </button>

            </div>
            {/* Offers Section */}
            <div className="p-4">

                <h1 className="text-lg font-semibold mb-4">
                    Offers & Rewards
                </h1>

                <div className="flex flex-col gap-3">

                    <div className="bg-linear-to-r from-cyan-700 to-cyan-500 rounded-2xl p-4 text-white">
                        <p className="text-sm font-medium">
                            Cashback Won
                        </p>

                        <h1 className="text-2xl font-bold mt-1">
                            ₹120
                        </h1>

                        <button className="bg-white text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold mt-3">
                            Claim Now
                        </button>
                    </div>

                    <div className="border rounded-2xl p-4 flex justify-between items-center">

                        <div>
                            <h1 className="font-semibold text-sm">
                                Refer & Earn
                            </h1>

                            <p className="text-xs text-gray-500 mt-1">
                                Invite friends and earn rewards
                            </p>
                        </div>

                        <button className="bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm">
                            Invite
                        </button>

                    </div>

                </div>

            </div>

            {/* Recent Activity */}
            <div className="p-4">

                <h1 className="text-lg font-semibold mb-4">
                    Recent Activity
                </h1>

                <div className="flex flex-col gap-3">

                    <div className="flex items-center justify-between border rounded-xl p-3">

                        <div className="flex items-center gap-3">

                            <div className="size-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xl">
                                <FaUser />
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold">
                                    Rahul Sharma
                                </h1>

                                <p className="text-xs text-gray-500">
                                    Money Received
                                </p>
                            </div>

                        </div>

                        <h1 className="text-green-600 font-bold">
                            +₹500
                        </h1>

                    </div>

                    <div className="flex items-center justify-between border rounded-xl p-3">

                        <div className="flex items-center gap-3">

                            <div className="size-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xl">
                                <FaMobile />
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold">
                                    Mobile Recharge
                                </h1>

                                <p className="text-xs text-gray-500">
                                    Airtel Prepaid
                                </p>
                            </div>

                        </div>

                        <h1 className="text-red-600 font-bold">
                            -₹299
                        </h1>

                    </div>

                    <div className="flex items-center justify-between border rounded-xl p-3">

                        <div className="flex items-center gap-3">

                            <div className="size-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl">
                                <FaLightbulb />
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold">
                                    Electricity Bill
                                </h1>

                                <p className="text-xs text-gray-500">
                                    Paid Successfully
                                </p>
                            </div>

                        </div>

                        <h1 className="text-red-600 font-bold">
                            -₹1450
                        </h1>

                    </div>

                </div>

            </div>

            {/* Quick Services */}
            <div className="p-4 pb-10">

                <h1 className="text-lg font-semibold mb-4">
                    Quick Services
                </h1>

                <div className="grid grid-cols-3 gap-4">

                    <div className="border rounded-xl p-3 flex flex-col items-center gap-2">
                        <FaMobile className="text-2xl text-cyan-700" />
                        <p className="text-xs font-medium text-center">
                            Recharge
                        </p>
                    </div>

                    <div className="border rounded-xl p-3 flex flex-col items-center gap-2">
                        <FaCar className="text-2xl text-cyan-700" />
                        <p className="text-xs font-medium text-center">
                            Fastag
                        </p>
                    </div>

                    <div className="border rounded-xl p-3 flex flex-col items-center gap-2">
                        <FaMoneyBill1Wave className="text-2xl text-cyan-700" />
                        <p className="text-xs font-medium text-center">
                            Loan
                        </p>
                    </div>

                </div>

            </div>
        </>
    );
}
