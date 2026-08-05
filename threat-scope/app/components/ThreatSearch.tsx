"use client";

import { useState } from "react";
import { threatActors } from "../data/threat-actors";


export default function ThreatSearch(){


const [search,setSearch]=useState("");

const found =
threatActors[search as keyof typeof threatActors];



return (

<div className="bg-slate-900 p-6 rounded-xl">


<h2 className="text-2xl text-cyan-400 font-bold">

Threat Actor Search

</h2>



<input

className="mt-5 w-full bg-slate-800 p-3 rounded"

placeholder="Search APT29..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>



{
found &&

<div className="mt-5 bg-slate-800 p-5 rounded">


<h3 className="text-xl font-bold">

{found.name}

</h3>


<p className="mt-3">

Malware:

{found.malware.join(", ")}

</p>



<p>

MITRE:

{found.techniques.join(", ")}

</p>



</div>

}



</div>


);


}