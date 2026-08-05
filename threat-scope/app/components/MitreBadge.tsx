type Props = {
  techniques:string[];
};


export default function MItreBadge({
techniques
}:Props){


return (

<div className="mt-4">


<p className="
text-purple-400
font-bold
mb-3
">

MITRE ATT&CK

</p>



<div className="
flex
flex-wrap
gap-2
">


{techniques.map((technique)=>(


<span

key={technique}

className="
bg-purple-950
border
border-purple-700
text-purple-300
px-3
py-1
rounded-full
text-sm
"

>

{technique}

</span>


))}



</div>


</div>


);


}