import { NextResponse } from "next/server";
import { auditData } from "../../data/audit-data";


export async function GET(){


  return NextResponse.json({

    success:true,

    count:auditData.length,

    data:auditData

  });


}





export async function POST(request:Request){


  const body = await request.json();



  const log = {


    id:"LOG-"+Date.now(),

    analyst:"Or",

    action:body.action,

    target:body.target,

    time:"Just now"


  };



  auditData.push(log);



  return NextResponse.json({

    success:true,

    data:log

  });


}