import React, { useState, useEffect } from 'react';

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('trains.json')
      .then((response) => response.json())
      .then((data) => setTrains(data.trains))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.id}</td>
              <td>{train.name}</td>
              <td>{train.arrivalTime}</td>
              <td>{train.departureTime}</td>
              <td>{train.from}</td>
              <td>{train.to}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainList;
