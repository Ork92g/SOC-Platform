import { NextResponse } from "next/server";


export async function GET(){


  return NextResponse.json({


    success:true,


    stats:{


      incidents:2,

      alerts:3,

      ioc:2,

      actions:3


    },



    severity:{


      critical:1,

      high:3,

      medium:5,

      low:8


    },




    recentAlerts:[


      {

        id:"ALT-001",

        title:"Multiple Failed Login Attempts",

        severity:"High",

        source:"SIEM",

        time:"5 minutes ago"


      },


      {

        id:"ALT-002",

        title:"Suspicious PowerShell Activity",

        severity:"Critical",

        source:"EDR",

        time:"20 minutes ago"


      },


      {

        id:"ALT-003",

        title:"Unknown External Connection",

        severity:"Medium",

        source:"Firewall",

        time:"1 hour ago"


      }


    ],






    recentIOC:[


      {

        value:"8.8.8.8",

        type:"IP Address",

        risk:"Low",

        time:"5 minutes ago"


      },


      {

        value:"malicious-domain.com",

        type:"Domain",

        risk:"High",

        time:"30 minutes ago"


      }


    ],






    recentIncidents:[


      {

        id:"INC-2026-001",

        title:"Suspicious PowerShell Execution",

        severity:"High",

        status:"Investigating",

        analyst:"Or"


      },


      {

        id:"INC-2026-002",

        title:"Multiple Failed Login Attempts",

        severity:"Medium",

        status:"Open",

        analyst:"Or"


      }


    ],







    analystActivity:[


      {

        analyst:"Or",

        action:"Investigated Alert",

        target:"ALT-002",

        time:"10 minutes ago"


      },


      {

        analyst:"Or",

        action:"IOC Search",

        target:"8.8.8.8",

        time:"1 hour ago"


      },


      {

        analyst:"Or",

        action:"Exported Incident Report",

        target:"INC-2026-001",

        time:"2 hours ago"


      }


    ],







    systemHealth:[


      {

        service:"SIEM",

        status:"Online"


      },


      {

        service:"EDR",

        status:"Online"


      },


      {

        service:"Threat Intelligence API",

        status:"Online"


      }


    ]



  });


}