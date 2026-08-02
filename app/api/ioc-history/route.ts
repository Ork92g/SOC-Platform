import { NextResponse } from "next/server";
import { iocHistory } from "../../data/ioc-history";



export async function GET(){


  return NextResponse.json({

    success:true,

    count:iocHistory.length,

    data:iocHistory

  });


}




export async function POST(request:Request){


  const body = await request.json();



  const newIOC = {


    id:`IOC-${iocHistory.length + 1}`,

    value:body.value,

    type:body.type || "IP Address",

    risk:body.risk || "Unknown",

    analyst:"Or",

    time:"Just now"


  };



  iocHistory.unshift(newIOC);



  return NextResponse.json({

    success:true,

    data:newIOC

  });


}