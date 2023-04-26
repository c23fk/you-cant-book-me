import { Component } from "react";

function App() {
  return (
    <div>
      
    </div>
  );
}

function Grid(){
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return(
      <table>
          {days.map((day) => (
            <tr>  
              <td>{day}</td>
            </tr>
          ))
          }
      </table>
  )
}
export default App;
