import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Story from "./pages/Story"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:id" element={<Story />} />
    </Routes>
  )
}

