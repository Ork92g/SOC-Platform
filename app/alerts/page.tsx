"use client";

import { useEffect, useState } from "react";


export default function AlertsPage(){


  const [alerts,setAlerts] = useState<any[]>([]);




  async function loadAlerts(){


    const response = await fetch("/api/alert-management");

    const data = await response.json();


    setAlerts(data.data || []);


  }






  useEffect(()=>{


    loadAlerts();


  },[]);








  function severityColor(severity:string){


    if(severity==="Critical"){

      return "text-red-400 bg-red-500/20";

    }


    if(severity==="High"){

      return "text-orange-400 bg-orange-500/20";

    }


    if(severity==="Medium"){

      return "text-yellow-400 bg-yellow-500/20";

    }


    return "text-green-400 bg-green-500/20";


  }






  function investigateAlert(alert:any){


    if(alert.id==="ALT-001"){

      window.location.href =
      "/incident-details/INC-2026-001";

    }


    if(alert.id==="ALT-002"){

      window.location.href =
      "/incident-details/INC-2026-002";

    }


  }








  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">

        🚨 Alert Management

      </h1>


      <p className="text-slate-400 mt-2">

        Security Operations Center Alert Queue

      </p>





      <section className="mt-8 space-y-5">


        {alerts.map((alert:any)=>(


          <div

          key={alert.id}

          className="bg-slate-900 p-6 rounded-xl"

          >


            <div className="flex justify-between">


              <div>

                <h2 className="text-2xl font-bold">

                  {alert.title}

                </h2>


                <p className="text-slate-400">

                  {alert.id}

                </p>


              </div>




              <span

              className={`px-4 py-2 rounded-full ${severityColor(alert.severity)}`}

              >

                {alert.severity}

              </span>


            </div>






            <div className="grid md:grid-cols-4 gap-4 mt-6">


              <div className="bg-slate-800 p-4 rounded">

                Source

                <br/>

                {alert.source}

              </div>


              <div className="bg-slate-800 p-4 rounded">

                Status

                <br/>

                {alert.status}

              </div>


              <div className="bg-slate-800 p-4 rounded">

                Analyst

                <br/>

                {alert.analyst}

              </div>


              <div className="bg-slate-800 p-4 rounded">

                Time

                <br/>

                {alert.time}

              </div>


            </div>





            <button

            onClick={()=>investigateAlert(alert)}

            className="mt-6 bg-cyan-600 px-5 py-3 rounded"

            >

              🔍 Investigate

            </button>




          </div>


        ))}


      </section>


    </main>

  );


}