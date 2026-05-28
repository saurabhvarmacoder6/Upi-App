"use client";
import { FaSearch, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Phone() {
    const navigate = useRouter();
    const [users, setUsers] = useState({ message: [] });
    const [search, setSearch] = useState("");
    async function getUsers() {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        setUsers(data);
    }
    useEffect(() => {
        getUsers()
    }, [])


    const filteredUsers = users.message.filter(
        (user) =>
            user.type === "local" &&
            user.user.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">

                <button className="cursor-pointer font-bold text-xl text-blue-600 " onClick={() => navigate.push("/upi")}>
                    ←
                </button>

                <div>
                    <h1 className="text-lg font-semibold">
                        Send Money
                    </h1>

                    <p className="text-xs text-gray-500">
                        Transfer instantly to any mobile number
                    </p>
                </div>

            </div>

            {/* Search User */}
            <div className="border rounded-2xl p-3 flex items-center gap-3">

                <div className="text-gray-500 text-lg">
                    <FaSearch />
                </div>

                <input
                    type="text"
                    placeholder="Search mobile number"
                    className="outline-none w-full text-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {/* Fake Users */}
            <div className="mt-6 flex flex-col gap-4">

                {/* User */}
                {
                    filteredUsers.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10">
                            No users found.
                        </div>
                    ) : (
                        filteredUsers.map((user) => (
                            user.type === "local" && (
                                <div key={user._id} className="border rounded-2xl p-3 flex items-center justify-between  hover:bg-gray-50 transition">


                                    <div className="flex items-center gap-3">

                                        <div style={{ background: user.color || 'cyan' }} className={`size-12 rounded-full  text-white flex items-center justify-center text-lg font-semibold`}>
                                            {user.user.charAt(0)}
                                        </div>

                                        <div>
                                            <h1 className="text-sm font-semibold">
                                                {user.user}
                                            </h1>

                                            <p className="text-xs text-gray-500">
                                                {user.number}
                                            </p>
                                        </div>

                                    </div>

                                    <Link href={`phone/${user._id}`} className="bg-cyan-700 text-white px-4 py-2 cursor-pointer rounded-lg text-sm">
                                        Pay
                                    </Link>
                                </div>

                            ))
                        ))
                }

            </div>

            {/* Recent Transfers */}
            <div className="mt-8">

                <h1 className="text-md font-semibold mb-4">
                    Recent Transfers
                </h1>

                <div className="flex flex-col gap-3">

                    <div className="flex items-center justify-between border rounded-xl p-3">

                        <div className="flex items-center gap-3">

                            <div className="size-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                                <FaUser />
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold">
                                    Saurabh Kumar
                                </h1>

                                <p className="text-xs text-gray-500">
                                    5 days ago
                                </p>
                            </div>

                        </div>

                        <h1 className="font-bold text-red-600">
                            ₹500
                        </h1>

                    </div>

                    <div className="flex items-center justify-between border rounded-xl p-3">

                        <div className="flex items-center gap-3">

                            <div className="size-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                                <FaUser />
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold">
                                    Mohit Kumar
                                </h1>

                                <p className="text-xs text-gray-500">
                                    2 days ago
                                </p>
                            </div>

                        </div>

                        <h1 className="font-bold text-red-600">
                            ₹1200
                        </h1>

                    </div>

                </div>

            </div>

        </div>
    )
}

