import'./style.css'

const Tables = ({ events, highestAttendanceEvent, highestAttendancePercentage,lowestAttendanceEvent, lowestAttendancePercentage, largestCapacityEvent, largestCapacity, upcomingEvents, pastEvents}) => {
  
  return (
    <div role="tables">
      {/* Tabla Events */}
      <div className="text-center my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3} className="text-3xl">Events statistics</th>
          </tr>
          <tr>
            <th>With the highest % of assistance:</th>
            <th>With the lowest % of assistance:</th>
            <th>With the largest capacity:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{highestAttendanceEvent ? highestAttendanceEvent.name : "No hay infomarción disponible"}: {highestAttendancePercentage.toFixed(2)} %</td>
            <td>{lowestAttendanceEvent ? lowestAttendanceEvent.name : "No hay información disponible"}: {lowestAttendancePercentage.toFixed(2)} % </td>
            <td>{largestCapacityEvent ? largestCapacityEvent.name : "No hay información disponible"}: {largestCapacity}</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="text-center my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3} className="text-3xl">Upcoming events statistics by category</th>
          </tr>
          <tr>
            <th>Categories:</th>
            <th>Revenues:</th>
            <th>% of attendance:</th>
          </tr>
        </thead>
        <tbody>
        {upcomingEvents.map(event => (
        <tr key={event._id}>
          <td>{event.category}</td>
          <td>$ {((event.assistance || event.estimate) * event.price).toFixed(2)}</td>
          <td>{((event.assistance || event.estimate) / event.capacity * 100).toFixed(2)} %</td>
        </tr>
      ))}
        </tbody>
      </table>
      </div>


      <div className="text-center my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th colSpan={3} className="text-3xl">Past events statistics by category</th>
          </tr>
          <tr>
            <th>Categories:</th>
            <th>Revenues:</th>
            <th>% of attendance:</th>
          </tr>
        </thead>
        <tbody>
      {pastEvents.map(event => (
        <tr key={event._id}>
          <td>{event.category}</td>
          <td>$ {((event.assistance || event.estimate) * event.price).toFixed(2)}</td>
          <td>{((event.assistance || event.estimate) / event.capacity * 100).toFixed(2)} %</td>
        </tr>
      ))}
    </tbody>
      </table>
      </div>

    </div>
  );
};

export default Tables;
