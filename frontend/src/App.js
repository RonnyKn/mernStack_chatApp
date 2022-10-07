import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "../src/pages/HomePage/HomePage"
import ChatPage from "../src/pages/ChatPage/ChatPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
