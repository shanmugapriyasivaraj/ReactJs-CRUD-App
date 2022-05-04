import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../Service/api";
import { Link } from "react-router-dom";
import { deleteUser } from "../Service/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: white;
    font-size: 15px;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 15px;
  }
`;

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Nick Name</TableCell>
          <TableCell>PhoneNumber</TableCell>
          <TableCell>Email</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <Tbody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.nickName}</TableCell>
            <TableCell>{user.phoneNumber}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edituser/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
}

export default AllUsers;
