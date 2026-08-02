"use client";

import Link from "next/link";


export default function IncidentPage() {


  const incidents = [
    {
      id: "INC-2026-001",
      title: "Suspicious PowerShell Execution",
      severity: "High",
      status: "Investigating",
      source: "EDR",
      time: "10 minutes ago",
    },
    {
      id: "INC-2026-002",
      title: "Multiple Failed Login Attempts",
      severity: "Medium",
      status: "Open",
      source: "SIEM",
      time: "35 minutes ago",
    },
    {
      id: "INC-2026-003",
      title: "Malicious IP Communication",
      severity: "Critical",
      status: "Contained",
      source: "Threat Intelligence",
      time: "1 hour ago",
    },
  ];




  function severityColor(level:string){


    if(level==="Critical"){
      return "text-red-400";
    }


    if(level==="High"){
      return "text-orange-400";
    }


    if(level==="Medium"){
      return "text-yellow-400";
    }


    return "text-green-400";


  }





  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">
        📋 Incident Management
      </h1>


      <p className="text-slate-400 mt-2">
        Security incident tracking and investigation
      </p>





      <div className="mt-10 space-y-5">


        {incidents.map((incident)=>(


          <div

          key={incident.id}

          className="bg-slate-900 rounded-xl p-6"

          >



            <div className="flex justify-between">


              <div>


                <h2 className="text-xl font-bold">
                  {incident.title}
                </h2>


                <p className="text-slate-400 mt-2">
                  {incident.id}
                </p>


              </div>



              <span className={`font-bold ${severityColor(incident.severity)}`}>

                {incident.severity}

              </span>


            </div>






            <div className="grid md:grid-cols-3 gap-4 mt-6">


              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Status
                </p>

                <p>
                  {incident.status}
                </p>

              </div>




              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Source
                </p>

                <p>
                  {incident.source}
                </p>

              </div>




              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Detected
                </p>

                <p>
                  {incident.time}
                </p>

              </div>


            </div>






            <div className="mt-5">

              <Link

              href={`/incident-details/${incident.id}`}

              className="bg-cyan-600 px-5 py-3 rounded-lg inline-block hover:bg-cyan-500"

              >

                🔍 Investigate

              </Link>


            </div>





          </div>


        ))}


      </div>


    </main>

  );

}