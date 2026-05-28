"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export default function PayUi() {
    const { id } = useParams();
    const navigate = useRouter();
    const [user, setUser] = useState<any>(null);
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState('');
    const [name, setName] = useState('');
    const payAmount = -Number(amount);

    async function decAmount() {
        try {
            const res = await fetch("http://localhost:3000/users/6a166cadaf543f1e54bac4fa", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ balance: payAmount })
            });
            const data = await res.json();
            alert("Transfer successful!");
            setAmount('');
            return data;

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    async function getBalance() {
        const res = await fetch("http://localhost:3000/users/6a166cadaf543f1e54bac4fa");
        const data = await res.json();
        setBalance(data.message.balance)
    }



    async function getUser() {
        try {
            const res = await fetch(`http://localhost:3000/users/${id}`);
            const user = await res.json();
            setUser(user.message);
            setName(user.message.user);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    useEffect(() => {
        getUser();
        getBalance();
    }, [])

    async function postData() {
        try {
            const res = await fetch("http://localhost:3000/history", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ user: name, amount: Number(amount), type: "debit" })
            });
            const data = await res.json();
            return data;

        } catch (error) {
            console.error("Error posting data:", error);
        }
    }


    return (
        <div className="p-4 flex flex-col gap-6">

            {/* Header */}
            <div className="flex items-center gap-3">

                <button
                    onClick={() => navigate.back()}
                    className="text-2xl font-bold text-cyan-700"
                >
                    ←
                </button>

                <div>
                    <h1 className="text-2xl font-bold">
                        Send Money
                    </h1>

                    <p className="text-sm text-gray-500">
                        Pay instantly using UPI
                    </p>
                </div>

            </div>

            {/* User Card */}
            {
                user && (
                    <div className="flex flex-col gap-6">
                        <div className="border rounded-3xl p-5 shadow-sm bg-white flex items-center gap-4">

                            <div style={{ backgroundColor: user.color }} className="size-12 rounded-full text-white flex items-center justify-center font-bold">
                                {user.user[0]}
                            </div>

                            <div className="flex-1 ">

                                <h1 className="text-lg font-semibold">
                                    {user.user}

                                </h1>

                                <p className="text-sm text-gray-500">
                                    {user.number}
                                </p>
                            </div>

                        </div>


                        <div className="border rounded-3xl p-5 bg-white shadow-sm flex flex-col gap-5">

                            <div>
                                <h1 className="text-sm text-gray-500 mb-2">
                                    Enter Amount
                                </h1>

                                <div className="flex items-center gap-2">

                                    <span className="text-3xl font-bold text-cyan-700">
                                        ₹
                                    </span>

                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="0"
                                        className="w-full text-3xl font-bold outline-none"
                                        value={amount}
                                        onChange={(e) => {
                                            const amount = Number(e.target.value);
                                            if (amount <= 0 || amount > Number(balance)) {
                                                alert("Please enter vaild number");
                                                setAmount('')
                                                return;
                                            }
                                            setAmount(e.target.value);
                                        }}
                                    />

                                </div>

                            </div>


                            <div className="flex flex-col gap-2">

                                <label className="text-sm font-medium">
                                    Add Note
                                </label>

                                <input
                                    type="text"
                                    placeholder="What's this for?"
                                    className="border rounded-2xl px-4 py-3 outline-none text-sm"
                                />

                            </div>

                        </div>


                        <div className="flex gap-3 overflow-x-auto">

                            {
                                [100, 500, 1000, 5000].map((money) => (

                                    <button
                                        key={money} onClick={() => setAmount(money.toString())}
                                        className="border rounded-2xl px-5 py-3 w-full text-sm font-semibold whitespace-nowrap hover:bg-cyan-50"
                                    >
                                        ₹ {money}
                                    </button>

                                ))
                            }

                        </div>




                        <button onClick={() => { decAmount(); postData(); }} className="bg-cyan-700 hover:bg-cyan-800 transition text-white py-2 rounded-full font-semibold cursor-pointer">
                            Pay Now
                        </button>

                    </div>
                )
            }

            {/* Security Tip */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

                <h1 className="font-semibold text-sm mb-1">
                    Safe Payment Tip
                </h1>

                <p className="text-xs text-gray-600 leading-5">
                    Always verify receiver details before making payment.
                </p>

            </div>

        </div>
    )
}