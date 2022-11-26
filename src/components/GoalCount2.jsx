import { useState } from "react";
import Axios from "axios";
import "../App.css";


export default function GoalCount2() {

  const url4 = "https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20222023"

  const [goals4, setGoals4] = useState("")

  const oviTotalGoal1 = () => {
    Axios.get(url4)
    .then((res) => {
  
      setGoals4(res.data.stats[0].splits[0].stat.goals + 780)
   
  
      console.log("goals",res.data.stats[0].splits[0].stat.goals)
    })
  }

  return (
<p className="total-goals-ovi2"> {oviTotalGoal1(goals4)}{goals4}</p>
  )
  }

