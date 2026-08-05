type TimelineProps = {
  events: string[];
};


export default function ThreatTimeline({
  events
}: TimelineProps) {


  return (

    <div className="mt-6">


      <h4 className="
      text-purple-400
      font-bold
      mb-3
      ">

        Threat Activity Timeline

      </h4>



      <div className="
      border-l
      border-purple-700
      pl-4
      space-y-3
      ">


        {events.map((event, index)=>(


          <div
          key={index}
          className="
          text-zinc-400
          "
          >


            <span className="
            text-purple-400
            mr-2
            "
            >

              ●

            </span>


            {event}


          </div>


        ))}


      </div>


    </div>

  );


}