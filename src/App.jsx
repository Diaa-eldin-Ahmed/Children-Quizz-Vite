import React, { useState } from "react";
import quizImg from "./assets/its-quiz-time-logo-transparent-quiz-clip-art.png";
import { Practice } from "./Screens/Practice.jsx";
import { Routes, Route } from "react-router-dom";
import Rank from "./Screens/Rank";

export default function App() {
    const [rankNum, setRankNum] = useState(0);
    return (
        <>
            <img src={quizImg} alt="quizImg" className="img" />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<Practice setChildRank={setRankNum} />}
                    />
                    <Route path="/rank" element={<Rank rankNum={rankNum} />} />
                </Routes>
            </div>
        </>
    );
}
