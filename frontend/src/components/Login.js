import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import React, { useState } from "react"
import LoginIcon from "@mui/icons-material/Login"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  return (
    <div>
      <TextField
        type="text"
        variant="outlined"
        label="Username"
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <TextField
        type={showPassword ? "text" : "password"}
        variant="outlined"
        label="Password"
        required
        style={{ width: "100%", marginBottom: "10px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
