import { NextResponse } from "next/server";
import { alertsManagement } from "../../data/alerts-management";


export async function GET(){


  return NextResponse.json({

    success:true,

    count:alertsManagement.length,

    data:alertsManagement

  });


}