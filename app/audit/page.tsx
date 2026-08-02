"use client";

import { useEffect, useState } from "react";


export default function AuditPage(){


  const [logs,setLogs] = useState<any[]>([]);




  async function loadLogs(){


    const response = await fetch("/api/audit");

    const data = await response.json();


    setLogs(data.data || []);


  }






  useEffect(()=>{


    loadLogs();


  },[]);






  return (


    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">

        📜 SOC Audit Log

      </h1>


      <p className="text-slate-400 mt-2">

        Analyst activity tracking

      </p>







      <section className="mt-8 space-y-4">


        {logs.map((log:any)=>(


          <div

          key={log.id}

          className="bg-slate-900 p-5 rounded-xl"

          >


            <h2 className="text-xl font-bold text-cyan-400">

              {log.action}

            </h2>


            <p>

              Target: {log.target}

            </p>


            <p className="text-slate-400 mt-2">

              Analyst: {log.analyst}

              {" | "}

              {log.time}

            </p>


          </div>


        ))}



      </section>




    </main>


  );


}