import { NextResponse } from "next/server";
import { iocIntelligence } from "../../data/ioc-intelligence";


export async function POST(request:Request){


  const body = await request.json();


  const value = body.value;


  const result = iocIntelligence[value];



  if(result){


    return NextResponse.json({

      success:true,

      found:true,

      data:{

        value:value,

        ...result

      }

    });


  }



  return NextResponse.json({

    success:true,

    found:false,

    data:{

      value:value,

      risk:"Unknown",

      reputation:"No data",

      source:"Internal Database"

    }

  });



}