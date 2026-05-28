"use client"

import { useRouter } from "next/navigation";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

export default function QrScanner() {

    const navigate = useRouter();

    useEffect(() => {

        const reader = document.getElementById("reader");

        if (reader && reader.childElementCount > 0) {
            return;
        }
        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                qrbox: {
                    width: 250,
                    height: 250
                },
                fps: 5
            },
            false
        );

        scanner.render(
            (decodedText) => {

                console.log(decodedText);

                // Example QR Data
                // userId:12345

                const userId = decodedText.split(":")[1];

                navigate.push(`/upi/phone/${userId}`);

            },

            (error) => {
                console.log(error);
            }
        );

        return () => {
            scanner.clear().catch((error) => {
                console.log(error);
            });
        };

    }, []);

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
                        Scan QR Code
                    </h1>

                    <p className="text-sm text-gray-500">
                        Scan any UPI QR to pay instantly
                    </p>

                </div>

            </div>

            {/* Scanner Card */}
            <div className="border rounded-3xl p-5 bg-white shadow-sm flex flex-col gap-5">

                <div
                    id="reader"
                    className="overflow-hidden rounded-3xl"
                ></div>

                <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4">

                    <h1 className="font-semibold text-sm mb-1">
                        Demo QR Format
                    </h1>

                    <p className="text-xs text-gray-600">
                        userId:6a166cadaf543f1e54bac4fa
                    </p>

                </div>

            </div>

            {/* Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

                <h1 className="font-semibold text-sm mb-1">
                    Safety Tip
                </h1>

                <p className="text-xs text-gray-600 leading-5">
                    Verify merchant or receiver name before making payment.
                </p>

            </div>

        </div>
    )
}