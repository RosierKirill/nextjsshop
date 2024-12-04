"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    return (
        <div
            className={`flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-gist-sans)] ${
                isDarkMode ? "dark" : ""
            }`}
        >
            <header className="absolute top-4 right-4 flex flex-row items-center justify-between w-full px-4">
                <Image
                    src="/mountain.png"
                    alt="Next.js logo"
                    width={50}
                    height={50}
                    priority
                    className={`${isDarkMode ? "invert" : ""}`}
                />
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    >
                        Log In
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    >
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </header>
            <main className="flex flex-col gap-8 flex-1 items-center sm:items-start">


            </main>
            <footer className="flex gap-6 flex-wrap items-center justify-center mt-16 pt-6 border-t border-gray-300">
                <nav className="mb-4">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <Link href="/terms"
                                  className="border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy"
                                  className="border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contacts"
                                className="border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center space-x-6">
                    <Image
                        src="/public/facebook.png"
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => window.open('https://facebook.com', '_blank')}
                    />
                    <Image
                        src="/public/twitter.png"
                        alt="Twitter"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => window.open('https://twitter.com', '_blank')}
                    />
                    <Image
                        src="/public/instagram.png"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => window.open('https://instagram.com', '_blank')}
                    />
                </div>
            </footer>
        </div>
    );
}
