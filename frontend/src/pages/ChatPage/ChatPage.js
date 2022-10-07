import "./ChatPage.css"
import axios from "axios"
import { useEffect } from "react"

const ChatPage = () => {
  const fetchChats = async () => {
    const { data } = await axios.get("")
  }

  useEffect(() => {
    fetchChats()
  }, [])

  return (
    <>
      <h1>this is chat page</h1>
    </>
  )
}
export default ChatPage
