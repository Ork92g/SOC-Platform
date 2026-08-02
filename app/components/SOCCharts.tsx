"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export default function SOCCharts({severity}:any){


  const data = [

    {
      name:"Critical",
      value:severity?.critical || 0
    },

    {
      name:"High",
      value:severity?.high || 0
    },

    {
      name:"Medium",
      value:severity?.medium || 0
    },

    {
      name:"Low",
      value:severity?.low || 0
    }

  ];



  return (

    <div className="bg-slate-900 p-6 rounded-xl mt-8">


      <h2 className="text-2xl font-bold mb-5">

        📊 Alert Severity Distribution

      </h2>



      <ResponsiveContainer width="100%" height={300}>


        <PieChart>


          <Pie

          data={data}

          dataKey="value"

          nameKey="name"

          cx="50%"

          cy="50%"

          outerRadius={100}

          label

          />



          <Tooltip />

          <Legend />


        </PieChart>


      </ResponsiveContainer>



    </div>

  );


}