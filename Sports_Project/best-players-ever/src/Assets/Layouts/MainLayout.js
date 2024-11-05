import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import RankBar from "../../Components/RankBar";


export default function MainLayout({ children }) {
    return (
       
        <div className="min-h-screen text-white flex flex-col ">
                 {/* This ensures PlayerContext.Provider wraps everything */}
                     <Navbar />
                    
            <div className="w-full flex justify-center top-0 ">
            
                  
              
                <div className="flex-1 flex overflow-auto justify-center"> {/* Ensure scrollability */}
                    
                    <main className=" sm:max-w-4/5 md:w-3/5 lg:max-w-2/5 xl:max-w-1/2"> {/* Added margin-top to ensure content does not overlap */}
                       
                        {children}
                       
                    </main>
                </div>
            </div>
        </div>
       
    );
}


