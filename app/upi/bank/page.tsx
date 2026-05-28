"use client"

import { useRouter } from "next/navigation";

export default function Bank() {

    const navigate = useRouter();

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
                    <h1 className="text-xl font-semibold">
                        Bank Transfer
                    </h1>

                    <p className="text-sm text-gray-500">
                        Transfer money directly to bank account
                    </p>
                </div>

            </div>

           

            {/* Form */}
            <div className="border rounded-3xl p-5 bg-white shadow-sm flex flex-col gap-5">

                {/* Account Holder */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-medium">
                        Account Holder Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter full name"
                        className="border rounded-2xl px-4 py-3 outline-none"
                    />

                </div>

                {/* Account Number */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-medium">
                        Account Number
                    </label>

                    <input
                        type="number"
                        placeholder="Enter account number"
                        className="border rounded-2xl px-4 py-3 outline-none"
                    />

                </div>

                {/* IFSC */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-medium">
                        IFSC Code
                    </label>

                    <input
                        type="text"
                        placeholder="SBIN0004582"
                        className="border rounded-2xl px-4 py-3 outline-none uppercase"
                    />

                </div>

                {/* Amount */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-medium">
                        Amount
                    </label>

                    <div className="flex items-center border rounded-2xl px-4 py-3">

                        <span className="text-2xl font-bold text-cyan-700">
                            ₹
                        </span>

                        <input
                            type="number"
                            placeholder="0"
                            className="w-full outline-none text-2xl font-bold ml-2"
                        />

                    </div>

                </div>

                {/* Note */}
                <div className="flex flex-col gap-2">

                    <label className="text-sm font-medium">
                        Remark
                    </label>

                    <input
                        type="text"
                        placeholder="Optional note"
                        className="border rounded-2xl px-4 py-3 outline-none"
                    />

                </div>

            </div>

            {/* Recent Beneficiary */}
            <div className="flex flex-col gap-4">

                <div className="flex items-center justify-between">

                    <h1 className="text-lg font-semibold">
                        Recent Beneficiaries
                    </h1>

                    <button className="text-cyan-700 text-sm font-medium">
                        View All
                    </button>

                </div>

                {/* Item */}
                <div className="border rounded-2xl p-4 flex items-center justify-between bg-white shadow-sm">

                    <div className="flex items-center gap-3">

                        <div style={{background:"pink"}} className="size-12 rounded-full text-white flex items-center justify-center font-bold">
                            A
                        </div>

                        <div>

                            <h1 className="font-semibold text-sm">
                                Anu Sharma
                            </h1>

                            <p className="text-xs text-gray-500">
                                HDFC • XXXX 2211
                            </p>

                        </div>

                    </div>

                    <button className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-xl text-sm font-medium">
                        Select
                    </button>

                </div>

            </div>

            {/* Transfer Button */}
            <button className="bg-cyan-700 cursor-pointer text-white py-2 rounded-full text-lg font-semibold">
                Transfer Now
            </button>

            {/* Tip */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

                <h1 className="font-semibold text-sm mb-1">
                    Banking Tip
                </h1>

                <p className="text-xs text-gray-600 leading-5">
                    Double-check account number and IFSC before proceeding.
                </p>

            </div>

        </div>
    )
}