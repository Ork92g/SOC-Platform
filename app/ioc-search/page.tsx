"use client";

import { useState } from "react";


export default function IOCSearchPage() {


  const [ioc,setIoc] = useState("");
  const [result,setResult] = useState<any>(null);



  function searchIOC(){


    if(!ioc){

      setResult({
        error:"Enter IOC value"
      });

      return;

    }



    let type="Unknown";


    if(ioc.match(/^\d+\.\d+\.\d+\.\d+$/)){

      type="IP Address";

    }

    else if(ioc.includes(".")){

      type="Domain";

    }

    else if(ioc.length > 30){

      type="Hash";

    }



    setResult({

      value:ioc,

      type:type,

      risk:"Low",

      status:"No active threats detected",

      source:"SOC Threat Database",

      lastSeen:"Never"

    });


  }



  return (


    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">
        🔎 IOC Search
      </h1>


      <p className="text-slate-400 mt-2">
        Search Indicators of Compromise
      </p>




      <div className="mt-8 bg-slate-900 p-6 rounded-xl">


        <input

        className="w-full bg-slate-800 p-4 rounded"

        placeholder="Enter IP / Domain / Hash"

        value={ioc}

        onChange={(e)=>setIoc(e.target.value)}

        />



        <button

        onClick={searchIOC}

        className="mt-5 bg-cyan-600 px-6 py-3 rounded"

        >

        Search IOC

        </button>



      </div>





      {result && (


        <div className="mt-8 bg-slate-900 p-6 rounded-xl">


          <h2 className="text-2xl font-bold">
            IOC Result
          </h2>



          {result.error ? (


            <p className="mt-4 text-red-400">
              {result.error}
            </p>


          ) : (


            <div className="grid md:grid-cols-2 gap-5 mt-6">


              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Indicator
                </p>

                <p>
                  {result.value}
                </p>

              </div>



              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Type
                </p>

                <p>
                  {result.type}
                </p>

              </div>




              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Risk
                </p>

                <p className="text-green-400 font-bold">
                  {result.risk}
                </p>

              </div>



              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Status
                </p>

                <p>
                  {result.status}
                </p>

              </div>



              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Source
                </p>

                <p>
                  {result.source}
                </p>

              </div>



              <div className="bg-slate-800 p-4 rounded">

                <p className="text-slate-400">
                  Last Seen
                </p>

                <p>
                  {result.lastSeen}
                </p>

              </div>


            </div>


          )}



        </div>


      )}



    </main>


  );


}