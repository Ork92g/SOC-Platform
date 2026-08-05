import ReportButton from "./ReportButton";
import MItreBadge from "./MitreBadge";
import ThreatTimeline from "./ThreatTimeline";


type ThreatCardProps = {
  name: string;
  malware: string[];
  techniques: string[];
  iocs: string[];
  timeline: string[];
};



export default function ThreatCard({

  name,
  malware,
  techniques,
  iocs,
  timeline

}: ThreatCardProps) {



  const actor = {

    name,
    malware,
    techniques,
    iocs

  };




  return (

    <div className="
    bg-zinc-950
    border
    border-zinc-800
    rounded-xl
    p-6
    hover:border-purple-500
    transition
    ">



      <div className="
      flex
      justify-between
      items-center
      ">



        <h3 className="
        text-2xl
        font-bold
        text-purple-400
        ">

          {name}

        </h3>




        <span className="
        bg-red-950
        text-red-400
        px-3
        py-1
        rounded-full
        text-sm
        ">

          HIGH

        </span>



      </div>






      <div className="
      mt-5
      space-y-3
      text-zinc-300
      ">



        <p>
          🦠 Malware
        </p>


        <p className="text-zinc-500">

          {malware.join(", ")}

        </p>






        <p>
          🌐 Indicators
        </p>


        <p className="text-zinc-500">

          {iocs.join(", ")}

        </p>






        <MItreBadge techniques={techniques} />






        <ThreatTimeline events={timeline} />






        <ReportButton actor={actor}/>



      </div>




    </div>

  );


}