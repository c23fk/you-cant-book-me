import React, { Component } from "react";

function App() {
  return (
    <div>
      <Grid/>
    </div>
  );
}

class Grid extends Component{
  constructor(props){
    super(props);
    this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.times = ['10:00', '10:30', '11:00','11:30', '12:00', '1:30', '2:00','2:30', '3:00', '3:30'];
  }
  click(i,j){
    console.log(i,j);
  }
  render(){
    return(
        <table>
          <thead>
            <tr>
            {this.days.map((day) => (
                <th>{day}</th>
            ))
            }
            </tr>
          </thead>
          <tbody>
          {
          this.times.map((time,i) => (
            <tr>
              {this.days.map((day,j) => (
              <TimeSlot onClick = {() => this.click(i,j)} time={time}/>
              ))
              }
            </tr>
          ))
          }
          </tbody>
        </table>
    )
  }
}

function TimeSlot(props){
  return(
      <td>
        <div key = {props.key} onClick = {() => props.onClick()} className = "time">
          {props.time}
        </div>
      </td>
  )
}
export default App;
