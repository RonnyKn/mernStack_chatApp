import React, { useState } from "react"
import "./HomePage.css"
import { Container, Tab, Box, TextField, Button } from "@mui/material"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import LoginIcon from "@mui/icons-material/Login"

const HomePage = () => {
  const [value, setValue] = useState("1")
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  return (
    <Container>
      <div className="title-app">
        <h1 className="title">Talk-A-Tive</h1>
      </div>
      <div className="form">
        <Box sx={{ maxWidth: "100%" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: 600,
                maxWidth: "100%",
              }}
            >
              <TabList onChange={handleChange} variant="fullWidth">
                <Tab value="1" label="Login" />
                <Tab value="2" label="Signup" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <form action="submit">
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
                <Button
                  variant="contained"
                  color="error"
                  style={{ width: "100%" }}
                >
                  Get User Guest Creddential
                </Button>
              </form>
            </TabPanel>
            <TabPanel value="2">
              <form action="submit">
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
              </form>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </Container>
  )
}
export default HomePage
