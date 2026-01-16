import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Story from "./pages/Story"
import Memories from "./pages/Memories"
import Header from "./components/Header"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </>
  )
}
