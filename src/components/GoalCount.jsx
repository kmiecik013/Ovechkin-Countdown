import Axios from "axios";
import { useState } from "react";
import "../App.css";


export default function GoalCount() {

  const url = "https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20222023"
  
  const [goals, setGoals] = useState("")

  const [goals2, setGoals2] = useState("")

  const oviCount = () => {
    Axios.get(url)
    .then((res) =>{
      setGoals(894 - (res.data.stats[0].splits[0].stat.goals + 780))
    
      return setGoals(894 - (res.data.stats[0].splits[0].stat.goals + 780))

    console.log(res.data.stats[0].splits[0].stat.goals)

  })
}


  return (
    <div className="goal-count">
    
   

    
    <p className="card-text">...to catch Wayne Gretzky</p>
    <p className="till-grez"> {oviCount(goals)}{goals}</p>
    

   


      

      

      </div>
    
    
  );
}