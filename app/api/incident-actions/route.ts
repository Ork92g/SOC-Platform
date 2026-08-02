import { NextResponse } from "next/server";


let actions:any[] = [];



export async function GET(){


  return NextResponse.json({

    success:true,

    data:actions

  });


}




export async function POST(request:Request){


  const body = await request.json();



  const newAction = {


    id:`ACTION-${actions.length + 1}`,

    incident:body.incident,

    analyst:"Or",

    action:body.action,

    value:body.value,

    time:"Just now"


  };



  actions.push(newAction);



  return NextResponse.json({

    success:true,

    data:newAction

  });


}