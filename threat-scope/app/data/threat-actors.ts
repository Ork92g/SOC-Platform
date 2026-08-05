export const threatActors = {

  "APT29": {

    name: "APT29",

    aliases: [
      "Cozy Bear"
    ],

    origin: "Russia",

    risk: "High",


    description:
    "Advanced persistent threat group known for espionage campaigns and stealth operations.",


    techniques:[

      "T1566 - Phishing",

      "T1078 - Valid Accounts",

      "T1059 - Command and Scripting Interpreter"

    ],


    malware:[

      "SUNBURST",

      "WellMail"

    ],


    iocs:[

      "185.89.45.22"

    ]

  },



  "Lazarus Group": {

    name:"Lazarus Group",

    aliases:[
      "Hidden Cobra"
    ],


    origin:"North Korea",


    risk:"Critical",


    description:
    "Threat actor associated with cyber espionage and financial attacks.",


    techniques:[

      "T1059 - Command Shell",

      "T1486 - Data Encrypted for Impact"

    ],


    malware:[

      "AppleJeus"

    ],


    iocs:[

      "malicious-domain.com"

    ]

  }


} as const;