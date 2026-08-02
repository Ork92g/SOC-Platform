"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Sidebar() {


  const pathname = usePathname();



  const links = [

    {
      name:"Dashboard",
      icon:"🏠",
      url:"/"
    },

    {
      name:"IP Reputation",
      icon:"🌍",
      url:"/ip-checker"
    },

    {
      name:"Log Analyzer",
      icon:"📄",
      url:"/log-analyzer"
    },

    {
      name:"MITRE ATT&CK",
      icon:"🧠",
      url:"/mitre"
    },

    {
      name:"IOC Search",
      icon:"🔎",
      url:"/ioc-search"
    },

    {
      name:"Threat Hunting",
      icon:"🎯",
      url:"/threat-hunting"
    },

    {
      name:"Alerts",
      icon:"🚨",
      url:"/alerts"
    },

    {
      name:"Incident Management",
      icon:"📋",
      url:"/incident"
    },

    {
      name:"Audit Log",
      icon:"📝",
      url:"/audit"
    }

  ];




  return (


    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-6">



      <div className="mb-10">


        <h1 className="text-2xl font-bold">
          🛡️ SOC Toolkit
        </h1>


        <p className="text-sm text-slate-400 mt-2">
          Security Operations Center
        </p>


      </div>





      <nav className="space-y-2">


        {links.map((link)=>(


          <Link

            key={link.name}

            href={link.url}

            className={`flex items-center gap-3 p-3 rounded-lg transition ${
              
              pathname === link.url

              ? "bg-cyan-600 text-white"

              : "text-slate-300 hover:bg-slate-800"

            }`}

          >


            <span>
              {link.icon}
            </span>


            <span>
              {link.name}
            </span>


          </Link>


        ))}


      </nav>





      <div className="mt-10 bg-slate-900 p-4 rounded-xl">


        <p className="text-sm text-slate-400">
          System Status
        </p>


        <p className="mt-2 text-green-400 font-bold">
          🟢 Operational
        </p>


      </div>



    </aside>


  );

}