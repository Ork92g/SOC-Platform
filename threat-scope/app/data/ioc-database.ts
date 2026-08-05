export const iocDatabase = {

  "185.89.45.22": {

    type: "IP Address",

    risk: "High",

    reputation: "Malicious",

    actor: "APT29",

    malware: [
      "SUNBURST",
      "WellMail"
    ],

    techniques: [
      "T1566 - Phishing",
      "T1078 - Valid Accounts"
    ],

    source: "Threat Intelligence"

  },


  "malicious-domain.com": {

    type: "Domain",

    risk: "Critical",

    reputation: "Malicious",

    actor: "Lazarus Group",

    malware:[
      "AppleJeus"
    ],

    techniques:[
      "T1059 - Command Shell",
      "T1486 - Data Encrypted for Impact"
    ],

    source:"Open Source Intelligence"

  }


} as const;