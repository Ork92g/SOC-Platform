import { NextResponse } from "next/server";
import { alerts } from "../../data/soc-data";


export async function GET(){


  return NextResponse.json({

    success:true,

    count: alerts.length,

    data: alerts

  });


}