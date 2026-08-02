export const mitreData = {

  "Suspicious PowerShell Execution": [

    {
      technique:"T1059.001",
      name:"PowerShell",
      tactic:"Execution",
      description:"Command and scripting interpreter used to execute PowerShell commands."
    },

    {
      technique:"T1086",
      name:"PowerShell",
      tactic:"Execution",
      description:"Attackers use PowerShell to execute malicious commands."
    }

  ],



  "Multiple Failed Login Attempts": [

    {
      technique:"T1078",
      name:"Valid Accounts",
      tactic:"Persistence",
      description:"Attackers use legitimate credentials to access systems."
    }

  ],



  "Malicious IP Communication": [

    {
      technique:"T1105",
      name:"Ingress Tool Transfer",
      tactic:"Command and Control",
      description:"Transfer of tools or files from external systems."
    }

  ]

};