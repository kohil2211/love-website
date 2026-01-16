import { Link } from "react-router-dom"
import stories from "../data/stories"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden font-serif">

      {/* 🔝 TOP RIGHT MEMORIES LINK */}
      <div className="fixed top-16 right-10 z-30">
        <Link
          to="/memories"
          className="
            px-5 py-2
            rounded-full
            bg-white/70 backdrop-blur
            text-sm text-gray-900
            shadow-md
            hover:bg-white
            hover:scale-105
            transition
          "
        >
          Memories
        </Link>
      </div>

      {/* 🖼 BACKGROUND IMAGE */}
      <img
        src="/IMG_4253.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* 🌑 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* 💖 CONTENT */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6 animate-fadeIn">
        
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight drop-shadow-xl">
          Our Story ❤️
        </h1>

        <p className="mt-8 max-w-2xl text-white/90 text-xl leading-relaxed">
          This is everything I have ever wanted to tell you my love about how I really feel about you.
          I would love for you to check this out.
        </p>

        <Link to="/memories" className="mt-14 group relative">
          <div className="absolute inset-0 rounded-full bg-pink-500 blur-xl opacity-40 group-hover:opacity-70 transition" />
          <div
            className="
              relative bg-white text-black
              px-10 py-4 rounded-full
              text-lg font-semibold
              hover:scale-105
              transition-all duration-300
              shadow-2xl
            "
          >
            This is Us
          </div>
        </Link>
      </div>
    </div>
  )
}
