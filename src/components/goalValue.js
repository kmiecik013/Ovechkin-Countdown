
import Axios from "axios";


const url3= "https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=statsSingleSeason&season=20222023";
  

let totalGoal = Axios.get(url3)
  .then((res) => {

  return res.data.stats[0].splits[0].stat.goals
    console.log("ici",res.data.stats[0].splits[0].stat.goals)
  }
  )

  console.log("okay", totalGoal)


export default totalGoal;

