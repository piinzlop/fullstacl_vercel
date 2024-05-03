import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ ml: 5 }}>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
              alt="Bootstrap Logo"
              style={{ width: "50px", height: "auto", marginLeft: "10px" }}
            />
          </a>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", flexGrow: 1, ml: 2 }}
          >
            My CRM
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
