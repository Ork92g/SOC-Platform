import { NextResponse } from "next/server";

const iocIntelligence = {
  "185.89.45.22": {
    type: "IP Address",
    risk: "High",
    reputation: "Malicious",
    source: "Threat Intelligence"
  },
  "8.8.8.8": {
    type: "IP Address",
    risk: "Low",
    reputation: "Clean",
    source: "Google DNS"
  },
  "malicious-domain.com": {
    type: "Domain",
    risk: "Critical",
    reputation: "Malicious",
    source: "Threat Intelligence"
  }
} as const;


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const value = String(body.value);

    const result =
      iocIntelligence[value as keyof typeof iocIntelligence];


    if (result) {
      return NextResponse.json({
        found: true,
        value,
        result
      });
    }


    return NextResponse.json({
      found: false,
      value,
      result: {
        type: "Unknown",
        risk: "Unknown",
        reputation: "No Data",
        source: "Local Database"
      }
    });


  } catch (error) {

    return NextResponse.json(
      {
        error: "Invalid request"
      },
      {
        status: 400
      }
    );

  }
}