import { NextResponse } from "next/server";
import { iocScans } from "../../data/soc-data";


export async function GET(){


  return NextResponse.json({

    success:true,

    count:iocScans.length,

    data:iocScans

  });


}