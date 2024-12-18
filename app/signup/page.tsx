"use client";

import React, { useState } from 'react';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <header className="absolute top-4 right-4">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <div className={`p-8 rounded shadow-md w-full max-w-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        >
                            Sign Up
                        </button>
                        <a
                            href="/login"
                            className="text-sm sm:text-base text-blue-500 hover:underline mt-4 block text-center"
                        >
                            Déjà un compte?
                        </a>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a
                        href="/"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 mt-4"
                    >
                        Retour
                    </a>
                </form>
            </div>
        </div>
);
}
