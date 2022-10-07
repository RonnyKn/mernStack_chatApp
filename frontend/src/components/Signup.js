import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import React, { useState } from "react"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)

  return (
    <div>
      <TextField
        type="text"
        variant="outlined"
        label="Name"
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <TextField
        type="email"
        variant="outlined"
        label="Email"
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
      <TextField
        type={showConfirmPassword ? "text" : "password"}
        variant="outlined"
        label="Confirm Password"
        required
        style={{ width: "100%", marginBottom: "10px" }}
        InputProps={{
          // <-- This is where the toggle button is added.
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="pict-button-file"
        multiple
        type="file"
      />
      <label htmlFor="pict-button-file">
        <Button
          variant="outlined"
          component="span"
          style={{ marginBottom: "10px" }}
        >
          Upload Your Picture
        </Button>
      </label>
      <Button variant="contained" style={{ width: "100%" }}>
        Sign Up
      </Button>
    </div>
  )
}

export default Signup
