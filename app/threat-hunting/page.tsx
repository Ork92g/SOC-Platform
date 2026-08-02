"use client";

import { useEffect, useState } from "react";
import { huntingQueries } from "../data/hunting-data";


export default function ThreatHuntingPage(){


  const [query,setQuery] = useState("");

  const [history,setHistory] = useState<any[]>([]);

  const [loading,setLoading] = useState(false);

  const [result,setResult] = useState<any>(null);





  async function loadHistory(){


    const response = await fetch("/api/ioc-history");

    const data = await response.json();


    setHistory(data.data || []);


  }






  useEffect(()=>{


    loadHistory();


  },[]);








  async function searchIOC(){


    if(!query){

      return;

    }



    setLoading(true);



    const response = await fetch("/api/ioc-search",

      {

        method:"POST",

        headers:{

          "Content-Type":"application/json"

        },

        body:JSON.stringify({

          value:query

        })

      }

    );



    const data = await response.json();


    setResult(data);






    await fetch("/api/ioc-history",

      {

        method:"POST",

        headers:{

          "Content-Type":"application/json"

        },

        body:JSON.stringify({

          value:query,

          type:data.data.type || "Unknown",

          risk:data.data.risk

        })

      }

    );






    await fetch("/api/audit",

      {

        method:"POST",

        headers:{

          "Content-Type":"application/json"

        },

        body:JSON.stringify({

          action:"Threat Hunting IOC Search",

          target:query

        })

      }

    );




    setQuery("");

    loadHistory();

    setLoading(false);


  }








  function riskColor(risk:string){


    if(risk==="High"){

      return "text-red-400 bg-red-500/20";

    }


    if(risk==="Medium"){

      return "text-yellow-400 bg-yellow-500/20";

    }


    if(risk==="Low"){

      return "text-green-400 bg-green-500/20";

    }


    return "text-gray-400 bg-gray-500/20";


  }







  return (


    <main className="min-h-screen bg-slate-950 text-white p-10">



      <h1 className="text-4xl font-bold">

        🎯 Threat Hunting

      </h1>



      <p className="text-slate-400 mt-2">

        Advanced IOC investigation and KQL based hunting

      </p>







      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          🔎 IOC Investigation

        </h2>




        <div className="flex gap-4 mt-5">


          <input

          className="flex-1 bg-slate-800 p-4 rounded"

          placeholder="IP / Domain / Hash"

          value={query}

          onChange={(e)=>setQuery(e.target.value)}

          />



          <button

          onClick={searchIOC}

          disabled={loading}

          className="bg-cyan-600 px-6 rounded"

          >

            {loading ? "Checking..." : "Search"}

          </button>


        </div>





        {result && (


          <div className="mt-6 bg-slate-800 p-5 rounded-xl">


            <h3 className="text-xl font-bold">

              Result

            </h3>


            <p>

              IOC: {result.data.value}

            </p>


            <p>

              Type: {result.data.type}

            </p>


            <p className={`mt-2 px-3 py-1 inline-block rounded ${riskColor(result.data.risk)}`}>

              Risk: {result.data.risk}

            </p>


            <p className="mt-2">

              Reputation: {result.data.reputation}

            </p>


            <p>

              Source: {result.data.source}

            </p>



          </div>


        )}



      </section>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          🧠 Hunting Queries

        </h2>




        {huntingQueries.map((hunt:any)=>(


          <div

          key={hunt.id}

          className="bg-slate-800 p-5 mt-4 rounded-xl"

          >


            <h3 className="font-bold text-cyan-400">

              {hunt.name}

            </h3>



            <p className="mt-2">

              Query:

            </p>



            <code className="text-slate-300">

              {hunt.query}

            </code>




            <div className="mt-3">

              Severity: {hunt.severity}

              <br/>

              Matches: {hunt.matches}


            </div>



          </div>


        ))}



      </section>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          📋 Recent IOC Investigations

        </h2>




        {history.map((ioc:any)=>(


          <div

          key={ioc.id}

          className="bg-slate-800 p-5 mt-4 rounded-xl"

          >


            <h3 className="text-xl font-bold">

              {ioc.value}

            </h3>



            <p>

              Type: {ioc.type}

            </p>



            <span className={`px-3 py-1 rounded ${riskColor(ioc.risk)}`}>

              {ioc.risk}

            </span>



            <p className="text-slate-400 mt-3">

              {ioc.time}

            </p>


          </div>


        ))}



      </section>





    </main>


  );


}