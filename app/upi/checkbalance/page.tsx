"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function CheckBalance() {
    const [pin, setPin] = useState("");
    const [hide, setHide] = useState(true);
    const [users, setUsers] = useState({ message: [] });
    const [correctPin, setCorrectPin] = useState(false);
    const upiPin = "1234";
    const navigate = useRouter();

    async function getUsers() {
        try {
            const res = await fetch("http://localhost:3000/users");
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            alert("check your internet")
        }

    }
    useEffect(() => {
        getUsers()

    }, [])

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
                    <h1 className="text-lg font-semibold">Check Balance</h1>
                    <p className="text-sm text-gray-500">
                        Enter your UPI PIN
                    </p>
                </div>

            </div>

            {/* Card */}
            <div className="border rounded-3xl p-5 shadow-sm bg-white flex flex-col gap-5">

                {/* Bank */}
                <div className="flex items-center gap-3">

                    <div className="size-12 rounded-full bg-cyan-700 text-white flex items-center justify-center font-bold">
                        S
                    </div>

                    <div>
                        <h1 className="font-semibold text-sm">
                            State Bank of India
                        </h1>

                        <p className="text-xs text-gray-500">
                            XXXX 4582
                        </p>
                    </div>

                </div>

                {/* Balance */}
                {

                    pin === upiPin && (
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                            <p className="text-sm text-gray-500 mb-1">
                                Available Balance
                            </p>


                            <h1 className="text-3xl font-bold text-green-700">
                                ₹ {(users.message[users.message.length - 1] as any).balance}
                            </h1>
                        </div>
                    )
                }

                {/* UPI Pin */}
                {
                    hide && <div className="flex flex-col gap-2">

                        <label className="text-sm font-medium">
                            Enter UPI PIN
                        </label>
                        {
                            correctPin && (
                                <p className="text-red-600 text-xs">
                                    Incorrect PIN!
                                </p>
                            )
                        }

                        <input
                            type="password"
                            maxLength={4}
                            placeholder="••••"
                            className="border rounded-2xl px-4 py-3 outline-none text-center tracking-[10px] text-xl font-semibold"
                            value={pin}
                            onChange={(e) => {

                                const value = e.target.value;

                                setPin(value);

                                if (value.length === 4) {

                                    if (value === upiPin) {
                                        setHide(false);
                                        setCorrectPin(false);
                                    } else {
                                        setPin("");
                                        setCorrectPin(true);
                                    }

                                }

                            }}
                        />
                        <p className="text-xs text-gray-400 text-center">
                            Use demo pin: 1234
                        </p>

                    </div>
                }

            </div>

            {/* Security Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

                <h1 className="font-semibold text-sm mb-1">
                    Safe Payment Tip
                </h1>

                <p className="text-xs text-gray-600 leading-5">
                    Never share your UPI PIN with anyone.
                    Bank or support team will never ask for it.
                </p>

            </div>

        </div>
    )
}