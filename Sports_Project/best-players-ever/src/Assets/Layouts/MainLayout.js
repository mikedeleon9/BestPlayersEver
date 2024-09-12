import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";



export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen text-white flex ml-3">
                <aside className="sticky ">
                    <Sidebar />
                </aside>
    
            <div className="w-3/5 ml-6" >
    
                <Navbar />
                <main className="flex-1 ml-4">
              {children}
            </main>
        </div>
           
          
          </div>
         
      );
  }

