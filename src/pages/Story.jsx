import { useParams, useNavigate, Link } from "react-router-dom"
import stories from "../data/stories"

export default function Story() {
  const { id } = useParams()
  const navigate = useNavigate()

  const index = stories.findIndex(s => s.id === id)
  const story = stories[index]

  if (!story) {
    return (
      <div className="h-screen flex items-center justify-center font-serif">
        Story not found
      </div>
    )
  }

  // 🔁 CIRCULAR NAVIGATION
  const total = stories.length
  const prevIndex = (index - 1 + total) % total
  const nextIndex = (index + 1) % total

  const prevStory = stories[prevIndex]
  const nextStory = stories[nextIndex]

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-pink-200 to-pink-400 font-serif">

      {/* 🔝 TOP RIGHT LINKS */}
      <div className="fixed top-16 right-10 z-50 flex gap-3">
        <Link
          to="/"
          className="px-5 py-2 rounded-full bg-white/60 backdrop-blur text-sm hover:bg-white shadow transition"
        >
          Home
        </Link>
        <Link
          to="/memories"
          className="px-5 py-2 rounded-full bg-white/60 backdrop-blur text-sm hover:bg-white shadow transition"
        >
          Memories
        </Link>
      </div>

      {/* 🔁 COUNTER + ARROWS (CIRCULAR) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center gap-6 text-gray-800">
        <button
          onClick={() => navigate(`/story/${prevStory.id}`)}
          className="text-2xl hover:scale-125 transition"
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
  <span className="text-2xl font-serif">{index + 1} /</span>
  <span className="text-2xl font-serif">∞</span>
</div>

        <button
          onClick={() => navigate(`/story/${nextStory.id}`)}
          className="text-2xl hover:scale-125 transition"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* 🧠 MAIN CONTENT (FIT TO SCREEN) */}
      <div className="h-full flex flex-col justify-center px-16">

        <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
          {story.title}
        </h1>

        <div
          className="
            mx-auto
            w-full max-w-6xl
            bg-white/70 backdrop-blur
            rounded-3xl shadow-xl
            p-10
            grid grid-cols-2 gap-12
            items-center
          "
        >
          <img
            src={story.image}
            alt=""
            className="h-[420px] object-contain mx-auto rounded-2xl shadow-lg"
          />

          <p className="text-[17px] leading-relaxed text-gray-800">
            {story.text}
          </p>
        </div>

      </div>
    </div>
  )
}
