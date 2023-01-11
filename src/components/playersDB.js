import Axios from "axios";
import totalGoal from "./goalValue.js"
import GoalCount2 from './GoalCount2';





const players = [

{
    id:1,
    number:1,
    name:"Wayne Gretzky",
    goals:894
},

{
  id:2,
  number:2,
  name:"Gordie Howe",
  goals: 801
},

{
  id:3,
  number:3,
  name:"Alex Ovechkin",
  goals: <GoalCount2 />
  
},

{
  id:5,
  number:5,
  name: "Marcel Dionne",
  goals: 731
},

{
  id:4,
  number:4,
  name: "Brett Hull",
  goals: 741
},

{
  id:6,
  number:6,
  name: "Jaromir Jagr",
  goals: 766
},

{
  id:7,
  number:7,
  name: "Phil Esposito",
  goals: 717
},

{ 
  id:8,
  number:8,
  name: "Mike Gartner",
  goals: 708
  
},



  { 
    id:9,
    number:9,
    name: "Mark Messier",
    goals: 694
    
  },

  { 
    id:10,
    number:10,
    name: "Steve Yzerman",
    goals: 692
    
  },





]

const playerSorted = players.sort((a, b) => b.goals - a.goals)



const OviColor = () => {
  
  if (players.name === "Alex Ovechkin") {
      return <div className="name" style ={{color: "blue"}}></div>
  } 
}

console.log("check number", playerSorted)

export default playerSorted