import ovechkin1 from "../images/ovechkin.jpeg";
import ovechkin2 from "../images/ovechkin2.jpeg";
import GoalCount from "./GoalCount";
import TotalGoals from "./TotalGoals";



export default function Ovechkin() {


  return (
    <div className="main-structure">

      <div className="card">
      
      <h1>OVECHKIN</h1>
    

      <div className="goal-content">

       <TotalGoals />
     <GoalCount />
  
     
     </div>
     
     </div>
  
      


      

      </div>
    
    
  );
}

