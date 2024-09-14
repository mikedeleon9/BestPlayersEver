import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import RankBar from "../../Components/RankBar";


export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen text-white flex ml-3">
            <aside>
                <Sidebar />
            </aside>

            <div className="w-3/5 ml-6 flex flex-col">
                <Navbar />
                <div className="flex-1 overflow-auto"> {/* Ensure scrollability */}
                   
                    <main className="ml-4 mt-4"> {/* Added margin-top to ensure content does not overlap */}
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}


