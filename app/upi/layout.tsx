import Bottom from "../bottom/page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="
                w-full 
                h-screen 
                sm:w-[320px] 
                sm:h-160
                bg-white 
                border 
                sm:rounded-2xl 
                overflow-hidden 
                flex 
                flex-col
            ">

                <div className="flex-1 overflow-y-auto hide-scrollbar">
                    {children}
                </div>

                <Bottom />

            </div>

        </div>
    );
}