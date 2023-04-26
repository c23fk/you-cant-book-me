
function App() {
  return (
    <div>
      <Grid/>
    </div>
  );
}

function Grid(){
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['10:00', '10:30', '11:00','11:30', '12:00', '1:30', '2:00','2:30', '3:00', '3:30'];

  return(
      <table>
          <tr>
          {days.map((day) => (
              <th>{day}</th>
          ))
          }
          </tr>
        {
        times.map((time) => (
          <tr>
            {days.map(() => (
            <TimeSlot time={time}/>
            ))
            }
          </tr>
        ))
        }
      </table>
  )
}

function TimeSlot(props){
  return(
      <td>
        <div className = "time">
          {props.time}
        </div>
      </td>
  )
}
export default App;
