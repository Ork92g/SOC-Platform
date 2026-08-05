import { threatActors } from "../../data/threat-actors";


export default async function ThreatActorPage(
{
  params
}: {
  params: Promise<{ name: string }>
}) {


  const { name } = await params;


  const actor =
    threatActors[name as keyof typeof threatActors];



  if (!actor) {

    return (

      <main className="min-h-screen bg-slate-950 text-white p-10">

        Threat Actor Not Found

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <div className="max-w-5xl mx-auto">


        <h1 className="text-5xl font-bold text-cyan-400">

          {actor.name}

        </h1>



        <p className="mt-4 text-slate-400">

          {actor.description}

        </p>



        <div className="grid md:grid-cols-3 gap-5 mt-8">


          <div className="bg-slate-900 p-5 rounded-xl">

            Origin

            <h2 className="font-bold mt-2">

              {actor.origin}

            </h2>

          </div>



          <div className="bg-slate-900 p-5 rounded-xl">

            Risk

            <h2 className="font-bold mt-2 text-red-400">

              {actor.risk}

            </h2>

          </div>



          <div className="bg-slate-900 p-5 rounded-xl">

            Alias

            <h2 className="font-bold mt-2">

              {actor.aliases.join(", ")}

            </h2>

          </div>


        </div>




        <section className="mt-8 bg-slate-900 p-6 rounded-xl">


          <h2 className="text-2xl font-bold">

            MITRE ATT&CK Techniques

          </h2>



          {actor.techniques.map((item)=> (

            <div

              key={item}

              className="bg-slate-800 p-3 mt-3 rounded"

            >

              {item}

            </div>


          ))}


        </section>




        <section className="mt-8 bg-slate-900 p-6 rounded-xl">


          <h2 className="text-2xl font-bold">

            Associated Malware

          </h2>



          {actor.malware.map((item)=> (

            <div

              key={item}

              className="bg-red-950 p-3 mt-3 rounded"

            >

              {item}

            </div>


          ))}


        </section>



      </div>


    </main>

  );


}