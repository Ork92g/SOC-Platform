"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { mitreData } from "../../data/mitre-data";


export default function IncidentDetailsById(){


  const params = useParams();

  const id = params.id;



  const [incident,setIncident] = useState<any>(null);

  const [note,setNote] = useState("");

  const [status,setStatus] = useState("");

  const [actions,setActions] = useState<any[]>([]);

  const [iocData,setIocData] = useState<any>({});





  async function loadIncident(){


    const response = await fetch("/api/incident-details");

    const data = await response.json();


    const found = data.data.find(
      (item:any)=>item.id === id
    );


    setIncident(found);


    if(found){

      setStatus(found.status);

    }


  }






  async function loadActions(){


    const response = await fetch("/api/incident-actions");

    const data = await response.json();


    setActions(
      data.data.filter(
        (item:any)=>item.incident === id
      )
    );


  }







  async function loadIOC(){


    const response = await fetch("/api/ioc-enrichment");

    const data = await response.json();


    setIocData(data.data);


  }







  useEffect(()=>{


    loadIncident();

    loadActions();

    loadIOC();


  },[id]);







  async function saveAction(type:string,value:string){


    await fetch("/api/incident-actions",

      {

        method:"POST",

        headers:{

          "Content-Type":"application/json"

        },


        body:JSON.stringify({

          incident:id,

          action:type,

          value:value

        })


      }

    );


    loadActions();


  }






  if(!incident){


    return (

      <main className="min-h-screen bg-slate-950 text-white p-10">

        Loading Incident...

      </main>

    );


  }






  const mappedMitre = mitreData[incident.title] || [];






  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">



      <h1 className="text-4xl font-bold">

        🔬 {incident.id}

      </h1>



      <h2 className="text-2xl mt-4">

        {incident.title}

      </h2>








      <div className="grid md:grid-cols-3 gap-5 mt-8">


        <div className="bg-slate-900 p-5 rounded-xl">

          Severity

          <p className="font-bold text-orange-400">

            {incident.severity}

          </p>

        </div>





        <div className="bg-slate-900 p-5 rounded-xl">

          Status

          <p className="font-bold">

            {status}

          </p>

        </div>





        <div className="bg-slate-900 p-5 rounded-xl">

          Analyst

          <p className="font-bold">

            {incident.analyst}

          </p>

        </div>


      </div>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          🎯 MITRE ATT&CK Mapping

        </h2>




        {mappedMitre.length > 0 ? (


          mappedMitre.map((item:any)=>(


            <div

            key={item.technique}

            className="bg-slate-800 p-4 mt-4 rounded-xl"

            >


              <p className="text-cyan-400 font-bold">

                {item.technique} - {item.name}

              </p>



              <p>

                Tactic: {item.tactic}

              </p>



              <p className="text-slate-400 mt-2">

                {item.description}

              </p>


            </div>


          ))



        ) : (


          <p className="text-slate-400">

            No MITRE mapping available

          </p>


        )}



      </section>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          🌐 IOC Enrichment

        </h2>



        {incident.indicators?.map((ioc:string)=>(


          <div

          key={ioc}

          className="bg-slate-800 p-4 mt-4 rounded-xl"

          >


            <p className="text-cyan-400 font-bold">

              {ioc}

            </p>


            {iocData[ioc] ? (

              <>


              <p>
                Type: {iocData[ioc].type}
              </p>


              <p>
                Risk: {iocData[ioc].risk}
              </p>


              <p>
                Reputation: {iocData[ioc].reputation}
              </p>


              <p className="text-slate-400">
                Source: {iocData[ioc].source}
              </p>


              </>


            ) : (


              <p className="text-slate-400">

                No intelligence available

              </p>


            )}



          </div>


        ))}



      </section>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          ⚙️ Incident Response Actions

        </h2>





        <select

        className="bg-slate-800 p-3 rounded mt-5"

        value={status}

        onChange={(e)=>{


          setStatus(e.target.value);


          saveAction(
            "Status Changed",
            e.target.value
          );


        }}

        >


          <option>Open</option>

          <option>Investigating</option>

          <option>Contained</option>

          <option>Closed</option>


        </select>






        <textarea

        className="w-full bg-slate-800 p-4 rounded mt-5"

        placeholder="Add analyst note..."

        value={note}

        onChange={(e)=>setNote(e.target.value)}

        />





        <button

        className="mt-3 bg-cyan-600 px-5 py-3 rounded"

        onClick={()=>{


          saveAction(
            "Analyst Note",
            note
          );


          setNote("");


        }}

        >

          Save Note

        </button>




      </section>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          📜 Investigation History

        </h2>




        {actions.map((item:any)=>(


          <div

          key={item.id}

          className="bg-slate-800 p-4 mt-3 rounded"

          >


            <p className="text-cyan-400">

              {item.action}

            </p>


            <p>

              {item.value}

            </p>


            <p className="text-slate-400 text-sm">

              {item.analyst} - {item.time}

            </p>


          </div>


        ))}



      </section>









      <section className="mt-8 bg-slate-900 p-6 rounded-xl">


        <h2 className="text-2xl font-bold">

          🕒 Original Timeline

        </h2>




        {incident.timeline?.map((event:any)=>(


          <div

          key={event.time}

          className="bg-slate-800 p-3 mt-3 rounded"

          >

            {event.time} - {event.action}


          </div>


        ))}



      </section>





    </main>

  );


}