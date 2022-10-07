import { Button, TextField } from "@mui/material"
import React from "react"
import LoginIcon from "@mui/icons-material/Login"

const Login = () => {
  return (
    <div>
      <TextField
        type="text"
        variant="outlined"
        label="username"
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <TextField
        type="password"
        variant="outlined"
        label="username"
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        type="submit"
        style={{ width: "100%", marginBottom: "10px" }}
      >
        Login
        <LoginIcon />
      </Button>
      <Button variant="contained" color="error" style={{ width: "100%" }}>
        Get User Guest Creddential
      </Button>
    </div>
  )
}

export default Login
