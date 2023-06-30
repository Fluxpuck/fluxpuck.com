export default function Computer() {
    return (
        <>
            {/* Macintosh Computer */}
            <div className="flex h-px-900 w-px-800 bg-mac-body-light rounded-t-3xl">
                {/* Body */}
                <section className="w-full h-9 bg-yellow-500 rounded-t-3xl"></section>
                {/* Disk */}
                <section className="w-full h-9 bg-blue-500"></section>
                {/* Footer */}
                <section className="w-full h-9 bg-red-500"></section>
            </div>
        </>
    )
}