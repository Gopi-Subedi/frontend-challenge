import React from 'react';

function ViewInfo({ name, email, phoneno }) {
  return (
    <div>
      <h4> Information Page</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phoneno}</td>
        </tr>
      </table>
    </div>
  );
}

export default ViewInfo;
