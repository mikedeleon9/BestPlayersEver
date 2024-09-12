import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";



export default function MainLayout({ children }) {
    return (
      <div className="flex">
        <aside className="sticky top-0">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-4">
          {children}
        </main>
      </div>
    );
  }

