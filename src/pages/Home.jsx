import { Link } from "react-router-dom"
import stories from "../data/stories"

export default function Home() {
  const firstStory = stories[0]

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/IMG_4253.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
          Our Story ❤️
        </h1>

        <p className="text-white/90 max-w-xl mx-auto mb-10">
          This is everything I have ever wanted to tell you my love about how I really feel about you. I would for you to check this out.
        </p>

        <Link
          to={`/story/${firstStory.id}`}
          className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition"
        >
          Begin →
        </Link>
      </div>
    </div>
  )
}
