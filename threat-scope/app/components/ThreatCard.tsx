import ReportButton from "./ReportButton";


type ThreatCardProps = {
  name: string;
  malware: string[];
  techniques: string[];
  iocs: string[];
};



export default function ThreatCard({
  name,
  malware,
  techniques,
  iocs
}: ThreatCardProps) {


const actor = {
  name,
  malware,
  techniques,
  iocs
};



return (

<div className="
bg-slate-900
border
border-slate-700
rounded-xl
p-6
hover:border-cyan-400
transition
">


<h3 className="
text-2xl
font-bold
text-cyan-400
">

{name}

</h3>



<div className="mt-4">


<p className="text-red-400 font-bold">

Threat Level: High

</p>



<p className="mt-3 text-slate-300">

🦠 Malware:

</p>


<p className="text-slate-400">

{malware.join(", ")}

</p>



<p className="mt-3 text-slate-300">

🎯 MITRE Techniques:

</p>


<p className="text-slate-400">

{techniques.join(", ")}

</p>



<p className="mt-3 text-slate-300">

🌐 Indicators:

</p>


<p className="text-slate-400">

{iocs.join(", ")}

</p>



<ReportButton actor={actor} />


</div>



</div>

);


}