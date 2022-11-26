import ovechkin1 from "../images/ovechkin.jpeg";
import ovechkin2 from "../images/ovechkin2.jpeg";
import GoalCount from "./GoalCount";
import TotalGoals from "./TotalGoals";
import NextGame from "./NextGame";
import ScheduleModal from "./ScheduleModal"
import LeaderBoard from "./LeaderBoard"
import { useState} from "react"

export default function Ovechkin() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);


  return (
    <div className="main-structure">
      <div className="card">
        <h1>OVECHKIN</h1>

        <div className="goal-content">
          <TotalGoals />
          <GoalCount />
        </div>
      </div>

      <NextGame />

      <div className="bottom-buttons">

      <button className="check-schedule"
            onClick= {()=>setIsOpen(true)}>Get Schedule</button>
       <ScheduleModal open={isOpen} onClose={()=> setIsOpen(false)}>
        </ScheduleModal>

        <button className="check-leaders"
            onClick= {()=>setIsOpen1(true)}>Get LeaderBoard</button>
       <LeaderBoard open={isOpen1} onClose={()=> setIsOpen1(false)}>
        </LeaderBoard>
        </div>
    </div>
  );
}
