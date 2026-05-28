"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelfBank() {

    const [balance, setBalance] = useState('');

    const navigate = useRouter();

    async function getUsers() {
        try {
            const res = await fetch("http://localhost:3000/users/6a166cadaf543f1e54bac4fa", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ balance })
            });
            const data = await res.json();
            alert("Transfer successful!");
            setBalance('');
            return data;

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    async function postData(){
        try{
            const res = await fetch("http://localhost:3000/history", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user :"Bank", amount: balance, type: "credit" })
            });
            const data = await res.json();
            setBalance('');
            return data;

        } catch (error) {
            console.error("Error posting data:", error);
        }
    }



    return (
        <div className="p-4 flex flex-col gap-6 min-h-screen">

            {/* Header */}
            <div className="flex items-center gap-3">

                <button
                    onClick={() => navigate.push("/upi")}
                    className="text-2xl font-bold text-cyan-700"
                >
                    ←
                </button>

                <div>
                    <h1 className="text-lg font-semibold">
                        Self Transfer
                    </h1>

                    <p className="text-sm text-gray-500">
                        Transfer money between your accounts
                    </p>
                </div>

            </div>

            {/* Bank Card */}
            <div className="border rounded-3xl p-5 bg-linear-to-r from-cyan-700 to-cyan-500 text-white shadow-md">

                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-sm opacity-80">
                            Available Balance
                        </p>

                        <h1 className="text-3xl font-bold mt-1">
                            ₹99,99,999
                        </h1>
                    </div>

                    <div className="size-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                        S
                    </div>

                </div>

                <div className="mt-6">

                    <p className="text-xs opacity-80">
                        Testing Money Bank
                    </p>

                    <h1 className="font-semibold tracking-wide">
                        XXXX 4582
                    </h1>

                </div>

            </div>

            {/* Transfer Form */}
            <div className="border rounded-3xl p-5 flex flex-col gap-5 bg-white shadow-sm">

                {/* From */}


                {/* Amount */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-medium">
                        Amount
                    </label>

                    <input
                        type="number"
                        placeholder="Enter amount"
                        className="border rounded-2xl px-4 py-3 outline-none"
                        value={balance}
                        onChange={(e) => {
                            const amount = Number(e.target.value);
                            if (amount <= 0 || amount > 9999) {
                                alert("please enter a valid amount between 1 and 9999");
                                setBalance('')
                                return;
                            }
                            setBalance(e.target.value);
                        }}
                        min="1"
                    />

                </div>

                {/* Remark */}


                {/* Transfer Button */}
                <button onClick={()=>{getUsers(); postData()} } className="bg-cyan-700 hover:bg-cyan-800 transition text-white py-3 rounded-2xl font-semibold cursor-pointer">

                    Transfer Now

                </button>

            </div>

            {/* Recent Transfers */}
            <div className="flex flex-col gap-4">

                <h1 className="text-lg font-semibold">
                    Recent Transfers
                </h1>

                {/* Item */}
                <div className="border rounded-2xl p-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="size-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                            ↑
                        </div>

                        <div>

                            <h1 className="font-semibold text-sm">
                                SBI → HDFC
                            </h1>

                            <p className="text-xs text-gray-500">
                                Today • 10:45 AM
                            </p>

                        </div>

                    </div>

                    <h1 className="font-bold text-green-700">
                        ₹5,000
                    </h1>

                </div>

                {/* Item */}
                <div className="border rounded-2xl p-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="size-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                            ↑
                        </div>

                        <div>

                            <h1 className="font-semibold text-sm">
                                HDFC → SBI
                            </h1>

                            <p className="text-xs text-gray-500">
                                Yesterday • 08:20 PM
                            </p>

                        </div>

                    </div>

                    <h1 className="font-bold text-blue-700">
                        ₹2,500
                    </h1>

                </div>

            </div>

        </div>
    )
}