
import ReactDom from 'react-dom'
import "../styles/modal1.css"
import Axios from "axios";
import {useState} from "react";
import "../styles/scheduleModal.css";





const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FEFFDE',
  padding: '100px',
  zIndex: 1000,
  borderRadius:'5px',


}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


export default function Modal({ open, children, onClose }) {

  const d = new Date();
  let currentDay =
    d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  const url = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=15&startDate=${currentDay}&endDate=2023-05-01`;


  const [nextFive, setNextFive] = useState("");

let scheduleArray = []

    Axios.get(url).then((res) => {


     
      let i = 0
      while (i < 7) {
        scheduleArray.push(`${res.data.dates[i].games[0].teams.away.team.name} vs ${res.data.dates[i].games[0].teams.home.team.name} on ${res.data.dates[i].date}`)
        i++;
      }

      return scheduleArray

}) 

let listFunction = () => {
  setNextFive(scheduleArray.map((item) => {
    return <ol className="modal-list">{item}</ol>
  })
  )
}


console.log("niceee", scheduleArray)



  

 

  if (!open) return null
    return ReactDom.createPortal(
      <div>
      <div style={OVERLAY_STYLES} />
      <div className="model-styles">

       
        <button onClick={onClose}
                className="x-botton">X</button>
        <h1 className="title-modal-schedule">Next 5 Games</h1>
        <div className="important-content">
          <button onClick={listFunction}>Here</button>

          <div className="main-content-schedule">
          {nextFive}
          </div>
        
        
      <div>
      
      </div>
          </div>
        </div>
      </div>,
      document.getElementById('portal')
  
    );
}