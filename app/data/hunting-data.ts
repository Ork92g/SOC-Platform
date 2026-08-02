export const huntingQueries = [

  {
    id:"HUNT-001",
    name:"Suspicious PowerShell Execution",
    query:'DeviceProcessEvents | where FileName == "powershell.exe"',
    severity:"High",
    matches:5
  },


  {
    id:"HUNT-002",
    name:"Failed Login Spike",
    query:'SigninLogs | where ResultType != 0',
    severity:"Medium",
    matches:12
  },


  {
    id:"HUNT-003",
    name:"External IP Communication",
    query:'NetworkEvents | where RemoteIPType == "Public"',
    severity:"Critical",
    matches:3
  }

];