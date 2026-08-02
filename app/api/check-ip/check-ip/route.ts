import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const { ip } = await req.json();


    const response = await fetch(
      `https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`,
      {
        headers: {
          "Key": process.env.ABUSEIPDB_API_KEY!,
          "Accept": "application/json",
        },
      }
    );


    const data = await response.json();


    return NextResponse.json(data);


  } catch (error) {

    return NextResponse.json(
      {
        error: "Threat Intelligence API failed"
      },
      {
        status: 500
      }
    );

  }

}