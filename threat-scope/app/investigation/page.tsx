import { threatActors } from "../data/threat-actors";


export default function InvestigationPage(){


const actor = threatActors["APT29"];


return (

<main className="min-h-screen bg-slate-950 text-white p-10">


<h1 className="text-4xl font-bold text-cyan-400">

Threat Investigation Case

</h1>


<div className="mt-8 bg-slate-900 rounded-xl p-6">


<h2 className="text-2xl font-bold">

Case: {actor.name}

</h2>


<p className="mt-3 text-slate-400">

Active Threat Intelligence Investigation

</p>


</div>




<div className="grid md:grid-cols-3 gap-5 mt-8">



<div className="bg-slate-900 p-5 rounded-xl">

<h3 className="text-cyan-400 font-bold">

Threat Level

</h3>

<p className="text-2xl mt-2">

Critical

</p>

</div>



<div className="bg-slate-900 p-5 rounded-xl">

<h3 className="text-cyan-400 font-bold">

Associated Malware

</h3>


<p className="text-2xl mt-2">

{actor.malware.length}

</p>


</div>




<div className="bg-slate-900 p-5 rounded-xl">

<h3 className="text-cyan-400 font-bold">

MITRE Techniques

</h3>


<p className="text-2xl mt-2">

{actor.techniques.length}

</p>


</div>



</div>





<section className="mt-8 bg-slate-900 rounded-xl p-6">


<h2 className="text-2xl font-bold">

Investigation Timeline

</h2>



<div className="mt-5 space-y-3">


<div className="bg-slate-800 p-4 rounded">

[+] Threat Actor Identified

</div>


<div className="bg-slate-800 p-4 rounded">

[+] Malware Association Found

</div>


<div className="bg-slate-800 p-4 rounded">

[+] MITRE Mapping Completed

</div>



</div>


</section>



</main>


);


}