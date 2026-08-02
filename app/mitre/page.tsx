export default function MitrePage() {


  const techniques = [

    {
      id:"T1059",
      name:"Command and Scripting Interpreter",
      tactic:"Execution",
      severity:"High",
      description:"Attackers use command-line tools and scripts to execute malicious actions."
    },

    {
      id:"T1078",
      name:"Valid Accounts",
      tactic:"Defense Evasion",
      severity:"Critical",
      description:"Attackers use stolen credentials to access systems."
    },

    {
      id:"T1053",
      name:"Scheduled Task/Job",
      tactic:"Persistence",
      severity:"Medium",
      description:"Attackers create scheduled tasks to maintain access."
    },

    {
      id:"T1566",
      name:"Phishing",
      tactic:"Initial Access",
      severity:"High",
      description:"Attackers use phishing emails to compromise users."
    }

  ];



  function severityColor(level:string){

    if(level==="Critical"){
      return "text-red-400";
    }

    if(level==="High"){
      return "text-orange-400";
    }

    return "text-yellow-400";

  }



  return (

    <main className="min-h-screen bg-slate-950 text-white p-10">


      <h1 className="text-4xl font-bold">
        🧠 MITRE ATT&CK
      </h1>


      <p className="text-slate-400 mt-2">
        Adversary tactics and techniques knowledge base
      </p>



      <div className="grid md:grid-cols-2 gap-6 mt-10">


        {techniques.map((tech)=>(


          <div

          key={tech.id}

          className="bg-slate-900 rounded-xl p-6"

          >


            <div className="flex justify-between">


              <h2 className="text-xl font-bold">
                {tech.name}
              </h2>


              <span className={`font-bold ${severityColor(tech.severity)}`}>

                {tech.severity}

              </span>


            </div>



            <p className="text-cyan-400 mt-3">
              {tech.id}
            </p>



            <p className="text-slate-400 mt-2">
              Tactic: {tech.tactic}
            </p>



            <p className="mt-5">
              {tech.description}
            </p>



            <div className="mt-5 bg-slate-800 p-4 rounded">

              <p className="text-slate-400">
                Detection
              </p>

              <p>
                Monitor SIEM logs, EDR events and suspicious process activity.
              </p>

            </div>


          </div>


        ))}


      </div>


    </main>

  );

}