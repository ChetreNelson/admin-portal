import { Label } from "@radix-ui/react-select";

export const additionalChargeRate = [
  {
    id: 1,
    name: "30% faster",
    charge: 0.81,
  },
  { id: 2, name: "I want to play myself", charge: 0.81 },
  { id: 3, name: "Mythic Calibration", charge: 0.81 },
  { id: 4, name: "I do not have meta heroes", charge: 0.81 },
  { id: 5, name: "Mage Emblems <45", charge: 0.81 },
  { id: 7, name: "Jungle Emblem <45", charge: 0.81 },
  { id: 6, name: "Assassin Emblems <45", charge: 0.81 },
];


export const ranksAndDivisons =[
  { 
    rank:{
      label:"Warrior",
      value:1
    },
    divisions:[
     "Division III",
      "Division II",
      "Division I"
    ]
  },
  {
    rank:{
      label:"Elite",
      value:2
    },
    divisions:[
      "Division III",
       "Division II",
       "Division I"
     ]
  },{
    rank:{
      label:"Master",
      value:3
    },
    divisions:[
      "Division IV",
      "Division III",
       "Division II",
       "Division I"
     ]
  },{
    rank:{
      label:"Grandmaster",
      value:4
    },
    divisions:[
      "Division IV",
      "Division III",
       "Division II",
       "Division I"
     ]
  },{
    rank:{
      label:"Epic",
      value:5
    },
    divisions:[
      "Division V",
      "Division IV",
      "Division III",
       "Division II",
       "Division I"
     ]
  },{
    rank:{
      label:"Legend",
      value:6
    },
    divisions:[
      "Division V",
      "Division IV",
      "Division III",
       "Division II",
       "Division I"
     ]
  },{
    rank:{
      label:"Mythic",
      value:7
    },
    divisions:[
      "Division V",
      "Division IV",
      "Division III",
       "Division II",
       "Division I"
     ]
  }
]