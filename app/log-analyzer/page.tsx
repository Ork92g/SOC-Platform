"use client";

import { useState } from "react";


export default function LogAnalyzerPage() {


  const [log,setLog] = useState("");
  const [result,setResult] = useState<any>(null);



  function analyzeLog(){


    if(!log){

      setResult({
        error:"Paste log data first"
      });

      return;

    }



    let findings = [];
    let severity = "LOW";



    if(
      log.includes("4625") ||
      log.toLowerCase().includes("failed login")
    ){

      findings.push(
        "Multiple failed login attempts detected"
      );

      severity="MEDIUM";

    }



    if(
      log.toLowerCase().includes("powershell")
    ){

      findings.push(
        "PowerShell execution detected"
      );

      severity="HIGH";

    }



    if(
      log.toLowerCase().includes("mimikatz") ||
      log.toLowerCase().includes("credential dump")
    ){

      findings.push(
        "Possible credential theft activity"
      );

      severity="CRITICAL";

    }



    if(findings.length===0){

      findings.push(
        "No suspicious activity detected"
      );

    }



    setResult({

      severity,

      findings,

      timestamp:new Date().toLocaleString(),

      recommendation:
      "Review related events in SIEM and validate user activity."

    });


  }





  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">
        📄 Log Analyzer
      </h1>


      <p className="text-slate-400 mt-2">
        Analyze security events and detect suspicious activity
      </p>




      <div className="mt-8 bg-slate-900 p-6 rounded-xl">


        <textarea

        className="w-full h-60 bg-slate-800 p-4 rounded"

        placeholder="Paste Windows Event Log here..."

        value={log}

        onChange={(e)=>setLog(e.target.value)}

        />



        <button

        onClick={analyzeLog}

        className="mt-5 bg-cyan-600 px-6 py-3 rounded"

        >

        Analyze Log

        </button>



      </div>





      {result && (


        <div className="mt-8 bg-slate-900 p-6 rounded-xl">


          <h2 className="text-2xl font-bold">
            Analysis Result
          </h2>




          {result.error ? (

            <p className="text-red-400 mt-4">
              {result.error}
            </p>

          ) : (


          <div className="mt-5 space-y-5">


            <div className="bg-slate-800 p-4 rounded">

              <p className="text-slate-400">
                Severity
              </p>

              <p className="text-xl font-bold">
                {result.severity}
              </p>

            </div>




            <div className="bg-slate-800 p-4 rounded">


              <p className="text-slate-400">
                Findings
              </p>


              <ul className="mt-3 space-y-2">

                {result.findings.map(
                  (item:string,index:number)=>(

                  <li key={index}>
                    🚨 {item}
                  </li>

                ))}

              </ul>


            </div>




            <div className="bg-slate-800 p-4 rounded">

              <p className="text-slate-400">
                Analyst Recommendation
              </p>

              <p>
                {result.recommendation}
              </p>

            </div>




          </div>


          )}


        </div>


      )}



    </main>

  );

}