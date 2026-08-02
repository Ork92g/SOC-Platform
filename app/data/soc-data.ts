export const alerts = [

  {
    id:"ALT-001",
    title:"Multiple Failed Login Attempts",
    severity:"High",
    source:"SIEM",
    status:"Investigating",
    time:"5 minutes ago"
  },

  {
    id:"ALT-002",
    title:"Suspicious PowerShell Activity",
    severity:"Critical",
    source:"EDR",
    status:"Open",
    time:"20 minutes ago"
  },

  {
    id:"ALT-003",
    title:"Unknown External Connection",
    severity:"Medium",
    source:"Firewall",
    status:"Monitoring",
    time:"1 hour ago"
  },


];




export const incidents = [

  {
    id:"INC-2026-001",
    title:"Suspicious PowerShell Execution",
    severity:"High",
    status:"Investigating",
    source:"EDR",
    time:"10 minutes ago"
  },

  {
    id:"INC-2026-002",
    title:"Multiple Failed Login Attempts",
    severity:"Medium",
    status:"Open",
    source:"SIEM",
    time:"35 minutes ago"
  },


];




export const iocScans = [

  {
    value:"8.8.8.8",
    type:"IP Address",
    risk:"Low"
  },

  {
    value:"malicious-domain.com",
    type:"Domain",
    risk:"High"
  }

];