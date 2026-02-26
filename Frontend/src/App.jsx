import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DocumentListPage from "./pages/Documents/DocumentListPage";
import DocumentDetailPage from "./pages/Documents/DocumentDetailPage";
import FlashcardsListPage from "./pages/Flashcards/FlashcardsListPage";
import FlashcardPage from "./pages/Flashcards/FlashcardPage";
import QuizTakePage from "./pages/Quizzes/QuizTakePage";
import QuizResultPage from "./pages/Quizzes/QuizResultPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home/Home";

const App = () => {
    const { isAuthenticated, loading } = useAuth();

    // FIXED: Added the missing 'return' keyword
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* FIXED: Replaced duplicate route & infinite redirect loop */}
                <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} />

                {/* Optional enhancement: Protect register page from logged-in users too */}
                <Route
                    path="/register"
                    element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
                />

                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/documents" element={<DocumentListPage />} />
                    <Route path="/documents/:id" element={<DocumentDetailPage />} />
                    <Route path="/flashcards" element={<FlashcardsListPage />} />
                    {/* FIXED: Removed the double slash // */}
                    <Route path="/documents/:id/flashcards" element={<FlashcardPage />} />
                    <Route path="/quizzes/:quizId" element={<QuizTakePage />} />
                    <Route path="/quizzes/:quizId/results" element={<QuizResultPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
