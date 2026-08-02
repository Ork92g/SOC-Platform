export const incidentDetails:any[] = [

  {
    id:"INC-2026-001",
    title:"Suspicious PowerShell Execution",
    severity:"High",
    status:"Investigating",
    source:"EDR",
    analyst:"Or",

    timeline:[
      {
        time:"10:05",
        action:"Alert Created"
      },
      {
        time:"10:07",
        action:"Analyst Assigned"
      },
      {
        time:"10:15",
        action:"IOC Checked"
      }
    ],

    indicators:[
      "powershell.exe",
      "185.89.45.22"
    ],

    notes:"Investigation in progress. Reviewing PowerShell activity."
  }

];


export function addIncident(incident:any){

  incidentDetails.push(incident);

}