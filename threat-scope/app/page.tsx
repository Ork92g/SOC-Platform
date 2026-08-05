import Header from "./components/Header";
import ThreatSearch from "./components/ThreatSearch";
import ThreatCard from "./components/ThreatCard";
import { threatActors } from "./data/threat-actors";


export default function Home() {


  const actors = Object.values(threatActors);


  const totalMalware =
    actors.reduce(
      (sum, actor) => sum + actor.malware.length,
      0
    );


  const totalIocs =
    actors.reduce(
      (sum, actor) => sum + actor.iocs.length,
      0
    );


  const totalTechniques =
    actors.reduce(
      (sum, actor) => sum + actor.techniques.length,
      0
    );



  return (


    <main className="
    min-h-screen
    bg-slate-950
    text-white
    ">



      <Header />



      <section className="p-10">



        <div className="mb-10">


          <h2 className="
          text-4xl
          font-bold
          ">

            Threat Intelligence Center

          </h2>


          <p className="
          mt-3
          text-slate-400
          ">

            Monitor threat actors, malware campaigns and indicators of compromise.

          </p>


        </div>





        <div className="
        grid
        md:grid-cols-3
        gap-6
        mb-10
        ">



          <div className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
          ">


            <p className="text-slate-400">

              Threat Actors

            </p>


            <h3 className="
            text-4xl
            font-bold
            text-cyan-400
            ">

              {actors.length}

            </h3>


          </div>




          <div className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
          ">


            <p className="text-slate-400">

              Malware Families

            </p>


            <h3 className="
            text-4xl
            font-bold
            text-red-400
            ">

              {totalMalware}

            </h3>


          </div>




          <div className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
          ">


            <p className="text-slate-400">

              Intelligence Indicators

            </p>


            <h3 className="
            text-4xl
            font-bold
            text-yellow-400
            ">

              {totalIocs + totalTechniques}

            </h3>


          </div>



        </div>





        <ThreatSearch />





        <h2 className="
        text-3xl
        font-bold
        mt-12
        mb-6
        ">

          Threat Actor Database

        </h2>





        <div className="
        grid
        md:grid-cols-3
        gap-6
        ">



          {actors.map((actor)=>(


            <ThreatCard

              key={actor.name}

              {...actor}

            />


          ))}



        </div>



      </section>



    </main>


  );

}