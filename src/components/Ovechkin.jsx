import ovechkin1 from "../images/ovechkin.jpeg";
import ovechkin2 from "../images/ovechkin2.jpeg";
import GoalCount from "./GoalCount";



export default function Ovechkin() {


  return (
    <div className="main-structure">
      <img src={ovechkin1}/>
      <h1>Ovechkin</h1>
      <h1>Ovie needs <GoalCount /> from Gretzky </h1> 
      <img src={ovechkin2}/>



      

      </div>
    
    
  );
}

