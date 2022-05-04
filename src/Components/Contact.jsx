import { Box, Typography, styled } from "@mui/material";
import AllUsers from "./AllUsers";

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const Contact = () => {
  return (
    <Header>
      <Typography variant="h3"> Contact Manager</Typography>
      <br />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est possimus ea
        eius corporis soluta porro tempora aliquam totam hic neque quia dolore
        eum dignissimos ad, placeat perspiciatis expedita, fuga veritatis.
      </Typography>
      <AllUsers />
    </Header>
  );
};

export default Contact;
