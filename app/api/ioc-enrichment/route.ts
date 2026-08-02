import { NextResponse } from "next/server";
import { iocIntelligence } from "../../data/ioc-intelligence";


export async function GET(){


  return NextResponse.json({

    success:true,

    data:iocIntelligence

  });


}