import { div, form } from "motion/react-client";
import React, { useState } from "react";

export default function Form(){
    return (
        <form action="" className="flex flex-col justify-evenly items-center gap-5">
            <input type="text" placeholder="Enter a name" id = "name1" className="border-gray-500 border-2 rounded-md text-center w-sm h-10"/>
            <img src="public\heart.png" alt="" className="w-10 rotate-12"/>
            <input type="text" placeholder="Enter a name" id = "name2" className="border-gray-500 border-2 rounded-md text-center w-sm h-10"/>
            <button className="border-pink-300 bg-pink-300 text-white border-2 rounded-md text-center w-sm h-10">Testez la compatibilite :</button>
        </form>
    )
}