import React, { useState } from "react";
import { Practice } from "./Screens/Practice.jsx";
import { Routes, Route } from "react-router-dom";
import Rank from "./Screens/Rank";
import { Home } from "./Screens/Home.jsx";

export default function App() {
    const [rankNum, setRankNum] = useState(0);
    return (
        <>
            <div className="containerImg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/practice"
                        element={<Practice setChildRank={setRankNum} />}
                    />
                    <Route path="/rank" element={<Rank rankNum={rankNum} />} />
                </Routes>
            </div>
        </>
    );
}
