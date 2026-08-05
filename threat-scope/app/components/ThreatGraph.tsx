"use client";

import dynamic from "next/dynamic";
import { threatActors } from "../data/threat-actors";


const ForceGraph2D = dynamic(
  () => import("react-force-graph-2d"),
  {
    ssr:false
  }
);



export default function ThreatGraph(){


const actor =
threatActors["APT29"];



const nodes = [

{
id: actor.name,
group:"Threat Actor"
},

...actor.malware.map(
(item)=>({

id:item,
group:"Malware"

})
),


...actor.iocs.map(
(item)=>({

id:item,
group:"IOC"

})
),


...actor.techniques.map(
(item)=>({

id:item,
group:"MITRE"

})
)

];





const links = [

...actor.malware.map(
(item)=>({

source:actor.name,
target:item

})
),



...actor.iocs.map(
(item)=>({

source:actor.malware[0],
target:item

})
),



...actor.techniques.map(
(item)=>({

source:actor.name,
target:item

})
)

];




return (

<div className="bg-slate-900 rounded-xl p-6">


<h2 className="text-2xl font-bold text-cyan-400 mb-5">

Live Threat Intelligence Graph

</h2>



<div style={{height:"600px"}}>


<ForceGraph2D

graphData={{
nodes,
links
}}

nodeLabel="id"

nodeAutoColorBy="group"

width={900}

height={600}

/>


</div>


</div>

);


}