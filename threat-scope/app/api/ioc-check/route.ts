import { NextResponse } from "next/server";
import { iocDatabase } from "../../data/ioc-database";


export async function POST(request: Request) {


  try {

    const body = await request.json();


    const value = String(body.value);


    const result =
      iocDatabase[value as keyof typeof iocDatabase];


    if(result){

      return NextResponse.json({

        found:true,
        value,
        result

      });

    }



    return NextResponse.json({

      found:false,
      value,

      result:{
        type:"Unknown",
        risk:"Unknown",
        reputation:"No Data",
        actor:"Unknown",
        source:"Local Database"
      }

    });



  } catch {


    return NextResponse.json(

      {
        error:"Invalid request"
      },

      {
        status:400
      }

    );

  }

}