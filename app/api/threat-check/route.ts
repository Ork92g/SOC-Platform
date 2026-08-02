import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { ip } = await req.json();
console.log(
  "API KEY EXISTS:",
  !!process.env.ABUSEIPDB_API_KEY
);

    if (!ip) {

      return NextResponse.json({
        error: "No IP provided"
      });

    }


    const response = await fetch(
      `https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`,
      {
        method: "GET",
        headers: {
          "Key": process.env.ABUSEIPDB_API_KEY!,
          "Accept": "application/json",
        },
      }
    );


    const data = await response.json();


    return NextResponse.json(data);


  } catch (error:any) {


    return NextResponse.json(
      {
        error: error.message
      },
      {
        status:500
      }
    );

  }

}