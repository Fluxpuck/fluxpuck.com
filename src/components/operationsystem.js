import Navigation from "@/components/_navigation";

export default function OperationSystem() {
    return (
        <>
            {/* Operation System */}
            <div className="w-full h-full">
                {/* Dynamic Header */}
                <section
                    className="grid grid-cols-11 h-20 w-full bg-mac-body-light rounded-t-xl border-b-2 border-black">
                    <div className="grid col-start-1 content-center justify-center">
                        {/* Rounded Logo */}
                        <span className="h-4 w-4 bg-black rounded-full"></span>
                    </div>
                    <div className="grid col-start-2 col-end-10 content-center justify-start">
                        <Navigation/>
                    </div>
                </section>
                {/* Window */}
                <section>

                </section>
            </div>
        </>
    )
}