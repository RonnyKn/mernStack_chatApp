import React, { useState } from "react"
import "./HomePage.css"
import { Container, Tab, Box } from "@mui/material"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Login from "../../components/Login"
import Signup from "../../components/Signup"

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
                <Login />
              </form>
            </TabPanel>
            <TabPanel value="2">
              <form action="submit">
                <Signup />
              </form>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </Container>
  )
}
export default HomePage
