import { NextResponse } from "next/server";


export async function GET(){


  return NextResponse.json({

    success:true,


    techniques:[

      {
        technique:"T1059.001",
        name:"PowerShell",
        tactic:"Execution"
      },

      {
        technique:"T1078",
        name:"Valid Accounts",
        tactic:"Persistence"
      },

      {
        technique:"T1105",
        name:"Ingress Tool Transfer",
        tactic:"Command and Control"
      }

    ]


  });


}