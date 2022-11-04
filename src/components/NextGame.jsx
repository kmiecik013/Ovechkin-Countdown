import Axios from "axios";
import { useState } from "react"
import "../App.css"



export default function NextGame() {

  const url = "https://statsapi.web.nhl.com/api/v1/schedule?teamId=15&startDate=2022-11-05&endDate=2023-05-01"
  
const d =  new Date()
let day = d.getDate(); 

console.log("here", d)

  const [nextGame, setNextGame] = useState("")
  const [date, setDate] =useState("")

  
const whenNextGame = () => {
  Axios.get(url)
  .then((res) => {

    setNextGame(res.data.dates[1].games[0].teams.away.team.name)
    
      return setNextGame(res.data.dates[1].games[0].teams.away.team.name)

    console.log(res.data.dates[1].games[0].teams.away.team.name)
  })
}

const dateNextGame = () => {
  Axios.get(url)
  .then((res) => {
    setDate(res.data.dates[1].date)
    
      return setDate(res.data.dates[1].date)

      console.log(res.data.dates[1].date)
  })
}


return (
    <div>
    <p className="next-game"> Ovi's next chance to score is againts the {whenNextGame(nextGame)}{nextGame} on {dateNextGame(date)}{date} </p>

     
    </div>
  );
}