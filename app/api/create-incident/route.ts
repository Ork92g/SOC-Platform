import { NextResponse } from "next/server";
import { addIncident } from "../../data/incident-details";


export async function POST(request:Request){


  const body = await request.json();

  const alert = body.alert;



  const newIncident = {

    id:"INC-"+Date.now(),

    title:alert.title,

    severity:alert.severity,

    status:"Investigating",

    source:alert.source,

    analyst:"Or",

    timeline:[
      {
        time:"Now",
        action:"Incident Created From Alert"
      }
    ],

    indicators:[],

    notes:"Created from SOC Alert Queue"

  };



  addIncident(newIncident);



  return NextResponse.json({

    success:true,

    incident:newIncident

  });


}