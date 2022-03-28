import React, { useEffect, useState } from 'react';

function SalesVisualization() {
  const [userlist, setuserlist] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          console.log('Could not detch data from server');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setuserlist(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="sv-container">
      <table className="table table-striped">
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
        {userlist.length ? (
          <>
            {userlist.map((user) => (
              <tr key={user['id']}>
                <td>{user['name']}</td>
                <td>{user['username']}</td>
                <td>{user['email']}</td>
              </tr>
            ))}
          </>
        ) : (
          <div className="errmsg">Data Not Found!!!</div>
        )}
      </table>
    </div>
  );
}

export default SalesVisualization;
