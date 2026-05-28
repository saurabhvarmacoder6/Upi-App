"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function HistorySec() {
    const navigate = useRouter();
    const [history, setHistory] = useState([]);
    const [filter, setFilter] = useState("all");
    async function getHistory() {
        try {
            const res = await fetch("/history");
            const data = await res.json();
            setHistory(data.history);

        } catch (error) {
            console.error("Error fetching history:", error);
        }
    }

    useEffect(() => {
        getHistory();
    }, []);

   async function clearHistory() {

    const res = await fetch("/history", {
        method: "DELETE"
    });

    getHistory();
}


    return (
        <div className="p-4 flex flex-col gap-5 min-h-screen">

            {/* Header */}
            <div className="flex items-center gap-3">

                <button
                    onClick={() => navigate.back()}
                    className="text-2xl font-bold text-cyan-700"
                >
                    ←
                </button>

                <div>
                    <h1 className="text-xl font-semibold">
                        Transaction History
                    </h1>

                    <p className="text-sm text-gray-500">
                        All payments & transfers
                    </p>
                </div>

            </div>


            {/* Filters */}
            <div className="flex items-center gap-4 overflow-x-auto py-2">

                <button 
                    className={`px-4 py-2 rounded-full text-sm ${filter === "all" ? "bg-cyan-700 text-white border border-cyan-700" : "border border-gray-400 text-gray-700"}`}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm ${filter === "credit" ? "bg-cyan-700 text-white border border-cyan-700" : " border border-gray-400 text-gray-700"}`}
                    onClick={() => setFilter("credit")}
                >
                    Credits
                </button>
                <button 
                    className={`px-4 py-2 rounded-full text-sm ${filter === "debit" ? "bg-cyan-700 text-white border border-cyan-700" : "border border-gray-400 text-gray-700"}`}
                    onClick={() => setFilter("debit")}
                >
                    Debits
                </button>
            </div>

            {/* Today */}
            <button className="text-left text-sm text-gray-600 border font-semibold cursor-pointer border-gray-600 px-3 py-2 rounded-full w-max" onClick={clearHistory}>
                Clear History
            </button>
            {
                history.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        No transactions yet.
                    </div>
                )
            }
             {
                history.map((item: any) => (
                    filter === "all" || item.type === filter ? (
                        <div key={item._id} className="flex flex-col gap-4">
                            {item.type === "debit" && (
                                <div className="shadow-sm shadow-gray-200 rounded-3xl p-4 flex items-center justify-between bg-white ">

                                <div className="flex items-center gap-3">

                                    <div className="size-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl">
                                        ↑
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Paid to
                                        </p>
                                        <h1 className="font-semibold">
                                            {item.user}
                                        </h1>
                                    </div>

                                </div>

                                <div className="flex flex-col items-center">

                                    <h1 className="font-bold text-red-600">
                                        {`- ₹${item.amount}`}
                                    </h1>

                                    <p className="text-xs text-green-600">
                                        Successful
                                    </p>

                                </div>

                            </div>
                        )}
                        {item.type === "credit" && (

                        <div className="shadow-sm shadow-gray-200 rounded-3xl p-4 flex items-center justify-between bg-white ">

                            <div className="flex items-center gap-3">

                                <div className="size-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                                    ↓
                                </div>

                                <div >
                                    <p className="text-xs text-gray-500 ">
                                        Received from
                                    </p>
                                    <h1 className="font-semibold ">
                                        Bank
                                    </h1>
                                </div>

                            </div>

                            <div className="flex flex-col items-center">

                                <h1 className="font-bold text-green-600">
                                   {`+ ₹${item.amount}`}
                                </h1>

                                <p className="text-xs text-green-600">
                                    Successful
                                </p>

                            </div>

                        </div>)}

                    </div>):null
                ))
            }
        
        </div>
    );
}