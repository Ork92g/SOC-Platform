import { NextResponse } from "next/server";
import { alertActions } from "../../data/alert-actions";


export async function GET(){


  return NextResponse.json({

    success:true,

    data:alertActions

  });


}



export async function POST(request:Request){


  const body = await request.json();



  const action = {


    id:"ACT-"+Date.now(),

    alert:body.alert,

    action:body.action,

    value:body.value,

    analyst:"Or",

    time:"Just now"


  };



  alertActions.push(action);



  return NextResponse.json({

    success:true,

    data:action

  });


}