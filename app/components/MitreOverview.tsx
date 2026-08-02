"use client";


export default function MitreOverview({techniques}:any){


  return (

    <section className="mt-8 bg-slate-900 p-6 rounded-xl">


      <h2 className="text-2xl font-bold">

        🎯 MITRE ATT&CK Overview

      </h2>




      <div className="grid md:grid-cols-3 gap-4 mt-5">


        {techniques?.map((item:any)=>(


          <div

          key={item.technique}

          className="bg-slate-800 p-5 rounded-xl"

          >


            <p className="text-cyan-400 font-bold">

              {item.technique}

            </p>


            <h3 className="text-xl font-bold">

              {item.name}

            </h3>


            <p className="text-slate-400">

              {item.tactic}

            </p>


          </div>


        ))}


      </div>


    </section>


  );


}