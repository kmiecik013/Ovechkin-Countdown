import Axios from "axios";
import { useState } from "react"
import "../App.css"



export default function NextGame() {


const d =  new Date()
let currentDay = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + 0+d.getDate(); 
  const url = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=15&startDate=${currentDay}&endDate=2023-05-01`
  

  const [nextGame, setNextGame] = useState("")
  const [date, setDate] =useState("")

  
const whenNextGame = () => {
  Axios.get(url)
  .then((res) => {

    setNextGame(res.data.dates[0].games[0].teams.away.team.name)
    
      return setNextGame(res.data.dates[0].games[0].teams.away.team.name)

    console.log(res.data.dates[0].games[0].teams.away.team.name)
  })
}

const dateNextGame = () => {
  Axios.get(url)
  .then((res) => {


    let apiDate = (res.data.dates[0].date)
  

    console.log("here4", apiDate)

    const months = ["Janrary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    
      let numMonth = apiDate.toString().split("-")

      let specificMonth = Number(numMonth[1]);
      let specificDate = Number(numMonth[2]);
      let specificYear = Number(numMonth[0]);



    const getMonth=() => {

      for (let i = 0; i < months.length; i++) {
        return months[specificMonth-1]
      }
    }
        console.log("here6", getMonth())

    const getTotalDate= () => {
      return getMonth() + " " + numMonth[2] + " " + numMonth[0] 
    }
     
 console.log("here5", numMonth)

    setDate(getTotalDate())
    
      return setDate(getTotalDate())

      console.log(res.data)
  })


}


return (
    <div>
    <p className="next-game"> Ovi's next chance to score is against the <span className="nhl-team"> {whenNextGame(nextGame)}{nextGame}</span> on {dateNextGame(date)}{date} </p>

     
    </div>
  );
}