import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import RankBar from "../../Components/RankBar";


export default function MainLayout({ children }) {
    return (
        
        <div className="min-h-screen text-white flex flex-col ">
             <Navbar />
         
            <div className="w-3/4 flex sticky top-0">
            <aside className="sticky top-0">
                <Sidebar />
            </aside>

               
                <div className="flex-1 overflow-auto "> {/* Ensure scrollability */}
                    
                    <main className="ml-4 "> {/* Added margin-top to ensure content does not overlap */}
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}


