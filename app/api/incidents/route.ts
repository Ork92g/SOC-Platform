import { NextResponse } from "next/server";
import { incidents } from "../../data/soc-data";


export async function GET(){


  return NextResponse.json({

    success:true,

    count: incidents.length,

    data: incidents

  });


}