import React from "react";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-center relative overflow-hidden selection:bg-emerald-500/30">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Subtle Dot Grid Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] pointer-events-none"></div>

            {/* Top Left Logo */}
          

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center">
                {/* Large 404 Text */}
                <h1 className="text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
                    404
                </h1>

                {/* Status Badge */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8 inline-flex items-center gap-2">
                    Page not found
                </div>

                {/* Copy */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Lost in the syllabus?</h2>

                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    We scanned through all your notes, flashcards, and quizzes, but we couldn't find the page you're
                    looking for.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* Using button for go back, but you can wrap this in a Link if using React Router */}
                    <button
                        onClick={() => window.history.back()}
                        className="bg-[#121212] hover:bg-[#1A1A1A] border border-white/10 hover:border-white/20 transition-all text-white px-6 py-3.5 rounded-full font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <ArrowLeft className="w-4 h-4 text-gray-400" /> Go Back
                    </button>

                    <a
                        href="/"
                        className="bg-emerald-500 hover:bg-emerald-400 transition-all text-black px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 w-full sm:w-auto group"
                    >
                        <Home className="w-4 h-4 group-hover:scale-110 transition-transform" /> Return Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
