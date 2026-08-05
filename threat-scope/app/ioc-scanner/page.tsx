"use client";

import { useState } from "react";


export default function IOCScanner() {

  const [value, setValue] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);



  async function analyze() {

    if (!value) return;


    setLoading(true);


    const response = await fetch(
      "/api/ioc-check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value
        })
      }
    );


    const data = await response.json();


    setResult(data);

    setLoading(false);

  }



  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <div className="max-w-5xl mx-auto">


        <h1 className="text-4xl font-bold text-cyan-400">
          ThreatScope IOC Scanner
        </h1>


        <p className="text-slate-400 mt-3">
          Threat Intelligence investigation platform
        </p>



        <div className="mt-8 bg-slate-900 p-6 rounded-2xl">


          <input

            className="
            w-full
            bg-slate-800
            p-4
            rounded-xl
            outline-none
            "

            placeholder="Enter IP Address or Domain"

            value={value}

            onChange={(e)=>setValue(e.target.value)}

          />



          <button

            onClick={analyze}

            className="
            mt-4
            bg-cyan-600
            px-6
            py-3
            rounded-xl
            hover:bg-cyan-500
            "

          >

            {
              loading
              ?
              "Analyzing..."
              :
              "Analyze IOC"
            }


          </button>


        </div>





        {
          result && (


          <section className="mt-8 bg-slate-900 p-6 rounded-2xl">


            <h2 className="text-2xl font-bold">
              Intelligence Report
            </h2>



            <div className="mt-6 space-y-4">


              <p>
                <b>Indicator:</b> {result.value}
              </p>


              <p>
                <b>Type:</b> {result.result.type}
              </p>


              <p>
                <b>Risk:</b> {result.result.risk}
              </p>


              <p>
                <b>Reputation:</b> {result.result.reputation}
              </p>



              <p>
                <b>Threat Actor:</b> {result.result.actor}
              </p>





              <div>


                <b>Associated Malware:</b>


                <div className="flex flex-wrap gap-2 mt-3">


                {
                  result.result.malware?.map(
                    (item:string)=>(

                    <span

                    key={item}

                    className="
                    bg-red-900
                    px-3
                    py-1
                    rounded-lg
                    "

                    >

                      {item}

                    </span>


                  ))

                }


                </div>


              </div>






              <div>


                <b>MITRE ATT&CK Techniques:</b>


                <div className="flex flex-wrap gap-2 mt-3">


                {
                  result.result.techniques?.map(
                    (item:string)=>(

                    <span

                    key={item}

                    className="
                    bg-cyan-900
                    px-3
                    py-1
                    rounded-lg
                    "

                    >

                      {item}

                    </span>


                  ))

                }


                </div>


              </div>






              <p>

                <b>Source:</b> {result.result.source}

              </p>



            </div>


          </section>


          )

        }



      </div>


    </main>


  );

}