import ReactDom from 'react-dom'
import "../styles/leaderModal.css"
import Axios from "axios";
import {useState} from "react"
import players from "./playersDB.js"



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

  let createLeaderBoard = (player) => {
    return ( 
    <div className="player-on-leader">
      <div className="number">{player.number}</div>
      <div className="name">{player.name}</div>
      <div className="goals">{player.goals}</div>
      
    </div>
    )

  }


  if (!open) return null
    return ReactDom.createPortal(
      <div>
      <div style={OVERLAY_STYLES} />
      <div className="model-styles">


       
        <button onClick={onClose}
                className="x-botton">X</button>
        <div className="leader-title">Career Goals LeaderBoard </div>
        <div className="important-content">
          {players.map(createLeaderBoard)}

      <div>
      
      </div>
          </div>
        </div>
      </div>,
      document.getElementById('portal')
  
    );
}