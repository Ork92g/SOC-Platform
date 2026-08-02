"use client";

import { useEffect, useState } from "react";


export default function Topbar() {


  const [time,setTime] = useState("");



  useEffect(()=>{

    const timer = setInterval(()=>{

      setTime(
        new Date().toLocaleTimeString()
      );

    },1000);



    return ()=>clearInterval(timer);


  },[]);




  return (

    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">


      <div>

        <h2 className="font-bold text-lg">
          Security Operations Center
        </h2>

      </div>





      <div className="flex items-center gap-8">


        <div className="text-slate-300">

          🚨 Alerts:

          <span className="ml-2 text-red-400 font-bold">
            12
          </span>

        </div>




        <div className="text-green-400">

          🟢 Online

        </div>





        <div className="text-slate-300">

          👨‍💻 Analyst

          <span className="ml-2 font-bold text-white">
            Or
          </span>

        </div>





        <div className="text-slate-400">

          {time}

        </div>


      </div>



    </header>

  );

}