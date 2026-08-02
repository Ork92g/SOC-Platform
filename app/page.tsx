"use client";

import { useEffect, useState } from "react";
import SOCCharts from "./components/SOCCharts";
import MitreOverview from "./components/MitreOverview";


export default function Dashboard(){


  const [data,setData] = useState<any>(null);

  const [mitre,setMitre] = useState<any[]>([]);




  useEffect(()=>{


    async function load(){


      const dashboardResponse = await fetch("/api/dashboard");

      const dashboardData = await dashboardResponse.json();


      setData(dashboardData);




      const mitreResponse = await fetch("/api/mitre");

      const mitreData = await mitreResponse.json();


      setMitre(mitreData.techniques || []);



    }


    load();


  },[]);







  if(!data){


    return (

      <main className="min-h-screen bg-slate-950 text-white p-10">

        Loading Dashboard...

      </main>

    );

  }






  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">


        <h1 className="text-4xl font-bold">

          🛡️ Sentinel SOC Platform

        </h1>


        <p className="text-slate-400 mt-2">

          Security Operations Center Monitoring & Incident Response Dashboard

        </p>



        <div className="grid md:grid-cols-3 gap-4 mt-5">


          <div className="bg-slate-800 p-4 rounded">

            🟢 Environment

            <p className="font-bold">

              Production Simulation

            </p>

          </div>



          <div className="bg-slate-800 p-4 rounded">

            ⚙️ Platform

            <p className="font-bold">

              Next.js SOC Toolkit

            </p>

          </div>




          <div className="bg-slate-800 p-4 rounded">

            🔄 Status

            <p className="font-bold text-green-400">

              All Systems Operational

            </p>

          </div>



        </div>



      </div>






      <div className="grid md:grid-cols-4 gap-5 mt-8">


        <Card title="🚨 Incidents" value={data.stats?.incidents}/>

        <Card title="⚠️ Alerts" value={data.stats?.alerts}/>

        <Card title="🔎 IOC" value={data.stats?.ioc}/>

        <Card title="📜 Actions" value={data.stats?.actions}/>


      </div>






      <SOCCharts severity={data.severity}/>






      <DashboardSection
      title="🚨 Recent Alerts"
      items={data.recentAlerts}
      />



      <DashboardSection
      title="🔎 Recent IOC"
      items={data.recentIOC}
      />



      <DashboardSection
      title="🚨 Recent Incidents"
      items={data.recentIncidents}
      />



      <DashboardSection
      title="👨‍💻 Analyst Activity"
      items={data.analystActivity}
      />



      <DashboardSection
      title="🟢 System Health"
      items={data.systemHealth}
      />




      <MitreOverview techniques={mitre}/>





      <footer className="mt-10 text-center text-slate-500">


        SOC Analyst Portfolio Project

        <br/>

        Built with Next.js • TypeScript • TailwindCSS



      </footer>




    </main>

  );

}







function Card({title,value}:any){


  return (

    <div className="bg-slate-900 p-6 rounded-xl">


      <h2 className="text-xl">

        {title}

      </h2>


      <p className="text-3xl font-bold mt-3">

        {value ?? 0}

      </p>


    </div>

  );

}







function DashboardSection({title,items}:any){


  return (

    <section className="mt-8 bg-slate-900 p-6 rounded-xl">


      <h2 className="text-2xl font-bold">

        {title}

      </h2>



      <div className="space-y-3 mt-5">


        {items?.map((item:any,index:number)=>(


          <div

          key={index}

          className="bg-slate-800 p-4 rounded"

          >


            {Object.entries(item).map(([key,value]:any)=>(


              <p key={key}>

                <b>{key}:</b> {String(value)}

              </p>


            ))}


          </div>


        ))}



      </div>


    </section>

  );

}