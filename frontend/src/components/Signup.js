import { Button, TextField } from "@mui/material"
import React from "react"

const Signup = () => {
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
        type="password"
        variant="outlined"
        label="Password"
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <TextField
        type="password"
        variant="outlined"
        label="Confirm Password"
        required
        style={{ width: "100%", marginBottom: "10px" }}
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
