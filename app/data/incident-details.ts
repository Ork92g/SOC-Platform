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
      }
    ],

    indicators:[
      "powershell.exe",
      "185.89.45.22"
    ],

    notes:"Investigation in progress."
  },


  {
    id:"INC-2026-002",
    title:"Multiple Failed Login Attempts",
    severity:"Medium",
    status:"Open",
    source:"SIEM",
    analyst:"Or",

    timeline:[
      {
        time:"11:20",
        action:"Alert Created"
      }
    ],

    indicators:[
      "User: admin"
    ],

    notes:"Checking authentication logs."
  }

];