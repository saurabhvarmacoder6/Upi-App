"use client"

import { useRouter } from "next/navigation";

export default function MyQr() {
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
                <h1 className="text-xl font-semibold">
                    Bank Of Baroda - 4787
                </h1>
            </div>

            {/* {My QR Code} */}
            <div className="flex items-center justify-center border rounded-3xl p-5 bg-white shadow-sm">
                <img src="/bob.png" alt="qr code" className="h-full w-full object-contain" />
            </div>

            {/* {Upi Id} */}
            <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-600">
                    9099310496@ibl
                </p>
            </div>
        </div>
    );
}