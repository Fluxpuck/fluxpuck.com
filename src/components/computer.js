import OperationSystem from "@/components/operationsystem";

export default function Computer() {
    return (
        <>
            {/* Macintosh Computer */}
            <div className="flex flex-col h-mac w-mac bg-mac-body-light rounded-3xl">
                {/* Mac-Body-area */}
                <section
                    className="grid grid-rows-10 w-full h-mac-body bg-mac-gradient rounded-t-3xl shadow-mac-body">
                    <div
                        className="grid m-auto row-start-2 row-end-9 h-full w-5/6 bg-gradient-to-br from-mac-body-dark to-mac-body-light rounded-2xl">
                        <div
                            className="m-auto h-90 w-90 bg-gradient-to-b from-mac-screen-light via-mac-screen-dark to-mac-screen-light rounded-xl">
                            <OperationSystem/>
                        </div>
                    </div>
                </section>
                {/* Mac-Disk-area */}
                <section className="grid grid-cols-11 w-full h-mac-disk bg-mac-disk-dark shadow-mac-disk">
                    {/* Disk */}
                    <div className="grid col-start-6 col-end-10 w-full h-full bg-black rounded"></div>
                    {/* Button */}
                    <span className="grid m-auto col-start-10 h-4 w-4 bg-black rounded-full"></span>
                </section>
                {/* Mac-Bottom-area */}
                <section
                    className="grid grid-cols-8 items-center w-full h-mac-footer bg-mac-gradient shadow-mac-footer rounded-b-3xl">
                    <object data="/logo/fluxpuck_word_dark.png" className="h-14 grid col-start-2"></object>
                </section>
            </div>
            {/* Mac-Footer-area */}
            <div className="h-footer w-footer bg-mac-disk-dark shadow-mac-disk rounded-b-xl"></div>
        </>
    )
}