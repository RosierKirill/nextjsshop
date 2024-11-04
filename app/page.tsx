"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-gist-sans)] ${isDarkMode ? 'dark' : ''}`}>
            <header className="absolute top-4 right-4">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    src="/mountain.png"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                    className={`${isDarkMode ? 'invert' : ''}`}
                    style={{ marginLeft: '10px' }}
                />
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Link href="/login" legacyBehavior>
                        <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                            Log In
                        </a>
                    </Link>
                    <Link href="/signup/" legacyBehavior>
                        <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                            Sign Up
                        </a>
                    </Link>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                Welcome!
            </footer>
        </div>
    );
}
