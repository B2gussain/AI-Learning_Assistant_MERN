import React from "react";
import { Sparkles, ArrowRight, BrainCircuit, BookOpen, Target, Zap, ChevronRight, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
// Adjust this import path depending on where your AuthContext is relative to this file
import { useAuth } from "../../context/AuthContext";

const Home = () => {
    // Pull the authentication status from your context
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span>
                            AI <span className="text-emerald-400">Learning Assistant</span>
                        </span>
                    </div>

                    <div className="flex gap-4 items-center">
                        {isAuthenticated ? (
                            <></>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-sm font-medium text-gray-300 hover:text-white hidden sm:flex items-center"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-white text-black hover:bg-gray-200 transition-colors px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    Start Free
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-emerald-300 mb-8 backdrop-blur-sm">
                    <Zap className="w-4 h-4" /> AI Learning Assistant is now live
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative z-10 max-w-4xl">
                    Learn faster. <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        Understand everything.
                    </span>
                </h1>

                <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg relative z-10 leading-relaxed">
                    Upload your lectures, PDFs, and notes. Our AI instantly creates a personalized study plan, smart
                    flashcards, and quizzes to guarantee you ace your exams.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto">
                    <Link
                        to={isAuthenticated ? "/dashboard" : "/register"}
                        className="bg-emerald-500 hover:bg-emerald-400 transition-all text-black px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 group"
                    >
                        {isAuthenticated ? "Go to Dashboard" : "Start studying smarter"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Minimalist Social Proof */}
                <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-3xl flex flex-col items-center">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
                        Trusted by students at top universities
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-gray-400 font-medium opacity-60 grayscale">
                        <span>Stanford</span>
                        <span>MIT</span>
                        <span>Oxford</span>
                        <span>Cambridge</span>
                        <span>ETH Zurich</span>
                    </div>
                </div>
            </section>

            {/* Bento Box Features Section */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything you need to <span className="text-emerald-400">excel.</span>
                    </h2>
                    <p className="text-gray-400">
                        Replace scattered notes and generic study guides with one intelligent workspace.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Feature 1: AI Tutor (Spans 2 columns) */}
                    <div className="md:col-span-2 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors"></div>
                        <BrainCircuit className="w-8 h-8 text-emerald-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-3">Your personal AI Tutor</h3>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Stuck on a complex concept? Ask Sagedesk. It reads your uploaded materials and explains
                            things using analogies tailored to your learning style.
                        </p>

                        <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-4 w-full max-w-lg shadow-2xl">
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Sparkles className="w-4 h-4 text-emerald-400" />
                                </div>
                                <div className="bg-[#1A1A1A] rounded-2xl rounded-tl-sm p-3 text-sm text-gray-300 border border-white/5">
                                    Explain Action Potentials like I'm 5, using the biology notes I just uploaded.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Flashcards */}
                    <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors group">
                        <BookOpen className="w-8 h-8 text-cyan-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-3">Smart Flashcards</h3>
                        <p className="text-gray-400 mb-8">
                            We automatically generate spaced-repetition flashcards from your documents so you never
                            forget what matters.
                        </p>

                        <div className="w-full aspect-[4/3] bg-[#0A0A0A] rounded-xl border border-white/10 flex items-center justify-center p-6 text-center group-hover:-translate-y-2 transition-transform shadow-2xl">
                            <p className="text-md font-medium text-gray-200">
                                What is the function of the mitochondria?
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Targeted Quizzes */}
                    <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors group">
                        <Target className="w-8 h-8 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-3">Adaptive Quizzes</h3>
                        <p className="text-gray-400">
                            Test your knowledge before exam day. Our AI identifies your weak spots and drills them.
                        </p>
                    </div>

                    {/* Feature 4: Progress Tracking (Spans 2 columns) */}
                    <div className="md:col-span-2 bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 hover:border-emerald-500/30 transition-colors">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">Track your mastery</h3>
                            <p className="text-gray-400">
                                Visualize your progress. We calculate a 'Mastery Score' based on your quiz performance
                                and flashcard retention, so you know exactly when you're ready.
                            </p>
                        </div>
                        <div className="w-40 h-40 shrink-0 relative flex items-center justify-center">
                            <div className="text-4xl font-bold text-emerald-400">92%</div>
                            <svg className="absolute w-full h-full rotate-[-90deg]">
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="76"
                                    fill="transparent"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="76"
                                    fill="transparent"
                                    stroke="#34d399"
                                    strokeWidth="8"
                                    strokeDasharray="477"
                                    strokeDashoffset="38"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified "How it works" */}
            <section className="py-24 border-t border-white/5 bg-[#030303]">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        From syllabus to A+ in <span className="text-emerald-400">3 steps</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"></div>

                        {[
                            {
                                step: "01",
                                title: "Upload everything",
                                desc: "Drag and drop your PDFs, slide decks, and Notion notes. We process them instantly.",
                            },
                            {
                                step: "02",
                                title: "Let AI organize it",
                                desc: "Sagedesk automatically extracts key concepts, formulas, and definitions.",
                            },
                            {
                                step: "03",
                                title: "Study & conquer",
                                desc: "Chat with your materials, run through flashcards, and take practice quizzes.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-[#0A0A0A] border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 font-bold mb-6 z-10 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your GPA?</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Join thousands of students who have stopped cramming and started actually learning.
                    </p>
                    <Link
                        to={isAuthenticated ? "/dashboard" : "/register"}
                        className="bg-white hover:bg-gray-200 transition-colors text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto w-fit group"
                    >
                        {isAuthenticated ? "Go to Dashboard" : "Create your free account"}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="border-t border-white/5 py-8 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold">
                        <Sparkles className="w-4 h-4 text-emerald-400" /> AI Learning Assistant
                    </div>

                    <div className="flex gap-4 text-gray-500">
                        <Twitter className="w-4 h-4 hover:text-white cursor-pointer" />
                        <Github className="w-4 h-4 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
