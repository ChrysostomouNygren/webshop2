import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Users() {
    const [users, setUsers] = useState([]);

  async function getUser() {
    const response = await axios.get(`https://k4backend.osuka.dev/users`);
    setUsers(response.data);
  }

  useEffect(() => {
    // användarlistan
    getUser();
  }, []);
  console.log(users)

  return (
    <div>
      {users.map((user) => (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>AnvändarID</th>
              <th>Användarnamn</th>
              <th>Email</th>
              <th>Telefonnummer</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
    
          </tbody>
        </Table>
      ))}
    </div>
  );
}

export default Users;
