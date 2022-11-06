import Axios from "axios";
import { useState } from "react"
import "../App.css"



export default function GoalCount() {

  const url = "https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20222023"
  


  const [goals2, setGoals2] = useState("")

  
const oviTotalGoal = () => {
  Axios.get(url)
  .then((res) => {

    setGoals2(res.data.stats[0].splits[0].stat.goals + 780)
 

    console.log(res.data.stats[0].splits[0].stat.goals)
  })
}


  return (
    <div className="top-text">
    
   

    


    <p><span className="card-text">Career Goals</span></p> 
    <p className="total-goals-ovi"> {oviTotalGoal(goals2)}{goals2}</p>
    




      

      

      </div>
    
    
  );
}