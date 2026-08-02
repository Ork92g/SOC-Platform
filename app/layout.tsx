import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";


export const metadata: Metadata = {
  title: "SOC Toolkit",
  description: "Security Operations Center Toolkit",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="en">

      <body>


        <div className="flex min-h-screen">


          <Sidebar />


          <div className="flex-1">


            <Topbar />


            <main>

              {children}

            </main>


          </div>


        </div>


      </body>

    </html>

  );

}