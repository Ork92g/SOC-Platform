"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function IncidentDetailsPage(){


  const [incidents,setIncidents] = useState<any[]>([]);



  useEffect(()=>{


    async function loadIncidents(){


      const response = await fetch("/api/incident-details");

      const data = await response.json();


      setIncidents(data.data || []);


    }


    loadIncidents();


  },[]);





  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">
        🔬 Incident Investigation
      </h1>


      <p className="text-slate-400 mt-2">
        Security incident analysis and investigation
      </p>





      <div className="mt-10 space-y-6">


        {incidents.map((incident)=>(


          <div
          key={incident.id}
          className="bg-slate-900 p-6 rounded-xl"
          >


            <div className="flex justify-between">


              <div>

                <h2 className="text-2xl font-bold">
                  {incident.title}
                </h2>


                <p className="text-slate-400 mt-2">
                  {incident.id}
                </p>

              </div>



              <span className="text-orange-400 font-bold">

                {incident.severity}

              </span>


            </div>





            <div className="grid md:grid-cols-3 gap-4 mt-6">


              <div className="bg-slate-800 p-4 rounded">

                Status

                <p className="font-bold mt-2">

                  {incident.status}

                </p>

              </div>



              <div className="bg-slate-800 p-4 rounded">

                Source

                <p className="font-bold mt-2">

                  {incident.source}

                </p>

              </div>



              <div className="bg-slate-800 p-4 rounded">

                Analyst

                <p className="font-bold mt-2">

                  {incident.analyst}

                </p>

              </div>


            </div>





            <div className="mt-6">

              <Link

              href={`/incident-details/${incident.id}`}

              className="bg-cyan-600 px-5 py-3 rounded-lg inline-block hover:bg-cyan-500"

              >

                🔍 Open Investigation

              </Link>


            </div>



          </div>


        ))}


      </div>


    </main>

  );


}