import Computer from "@/components/computer";

export default function Home() {
    return (
        <>
            {/* Index page */}
            <main className="flex h-screen flex-col justify-end items-center">
                {/* Maxintosh Computer */}
                <Computer/>
            </main>

            {/* Copyright */}
            <div className="fixed bottom-2 right-4 text-xs">Built with ❤ by
                Fluxpuck &copy; {new Date().getFullYear()} </div>
        </>
    )
}