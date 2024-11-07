import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import RankBar from "../../Components/RankBar";


export default function MainLayout({ children }) {
    return (
       
        <div className="min-h-screen text-white flex flex-col">
               
                 {/* This ensures PlayerContext.Provider wraps everything */}
                     <Navbar />
                    
            <div className="w-full flex top-0 p-2 ">
            
          
              
                <div className="flex-1 flex overflow-auto ml-2 w-full"> {/* Ensure scrollability */}
               
                    <main className="w-3/4 "> {/* Added margin-top to ensure content does not overlap */}
                    
                        {children}
                       
                    </main>
                </div>
            </div>
        </div>
       
    );
}


