import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div className="flex justify-center items-center">
            <h1 className="text-white"><Link to="/PlayersPage">click THIS to go to the playersPage</Link></h1>
            <h2 className="text-white">CLICK THIS</h2>
        </div>
    )
}