import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { getUser, editUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  name: "",
  nickName: "",
  phoneNumber: "",
  email: "",
};

function EditUser() {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  });

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Nick Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="nickName"
          value={user.nickName}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phoneNumber"
          value={user.phoneNumber}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <Button onClick={() => editUserDetails()} variant="contained">
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
}

export default EditUser;
