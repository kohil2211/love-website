import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Story from "./pages/Story"
import Header from "./Header"

function App() {
  return (
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:id" element={<Story />} />
    </Routes>
  )
}

export default App
