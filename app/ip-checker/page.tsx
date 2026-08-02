"use client";

import { useState } from "react";

export default function IPChecker() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState<any>(null);

  function checkIP() {
    if (!ip) return;

    // Demo Threat Intelligence Data
    const demoResult = {
      ip: ip,
      risk: ip === "8.8.8.8" ? 0 : 72,
      country: "United States",
      isp: "Google LLC",
      reports: ip === "8.8.8.8" ? 0 : 15,
      status: ip === "8.8.8.8" ? "Clean" : "Suspicious",
      findings:
        ip === "8.8.8.8"
          ? [
              "No malicious activity detected",
              "Trusted infrastructure IP",
            ]
          : [
              "Multiple abuse reports detected",
              "Possible malicious activity",
              "Requires investigation",
            ],
    };

    setResult(demoResult);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold">
        🌍 IP Reputation Checker
      </h1>

      <p className="mt-3 text-slate-400">
        SOC Analyst Threat Intelligence Tool
      </p>


      <div className="mt-8 bg-slate-900 rounded-xl p-6">

        <input
          className="w-full rounded-lg bg-slate-800 p-3"
          placeholder="Enter IP address..."
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />

        <button
          onClick={checkIP}
          className="mt-4 bg-cyan-600 rounded-lg px-6 py-3 font-bold"
        >
          Scan IP
        </button>

      </div>


      {result && (

        <div className="mt-8 bg-slate-900 rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Scan Result
          </h2>


          <div className="grid gap-4 md:grid-cols-2">

            <div>
              🌐 IP:
              <span className="text-cyan-400">
                {" "}{result.ip}
              </span>
            </div>


            <div>
              🚦 Status:
              <span className="ml-2 font-bold">
                {result.status}
              </span>
            </div>


            <div>
              🌍 Country:
              {" "}{result.country}
            </div>


            <div>
              🏢 ISP:
              {" "}{result.isp}
            </div>


            <div>
              🚨 Abuse Reports:
              {" "}{result.reports}
            </div>


            <div>
              ⚠️ Risk Score:
              {" "}{result.risk}%
            </div>

          </div>


          <div className="mt-6">

            <h3 className="font-bold">
              Security Findings:
            </h3>

            <ul className="mt-3 list-disc ml-6 text-slate-300">

              {result.findings.map(
                (item:string, index:number)=>(
                  <li key={index}>
                    {item}
                  </li>
                )
              )}

            </ul>

          </div>


        </div>

      )}

    </main>
  );
}