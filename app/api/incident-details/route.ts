import { NextResponse } from "next/server";
import { incidentDetails } from "../../data/incident-details";


export async function GET(){


  return NextResponse.json({

    success:true,

    count:incidentDetails.length,

    data:incidentDetails

  });


}