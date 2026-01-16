import { useParams, Link, useNavigate } from "react-router-dom"
import stories from "../data/stories"

export default function Story() {
  const { id } = useParams()
  const navigate = useNavigate()

  const currentIndex = stories.findIndex((s) => s.id === id)
  const story = stories[currentIndex]

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Story not found</p>
      </div>
    )
  }

  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null
  const nextStory =
    currentIndex < stories.length - 1
      ? stories[currentIndex + 1]
      : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 px-6 py-12">
      {/* Back */}
      <Link
        to="/"
        className="inline-block mb-8 text-sm text-gray-800 hover:underline"
      >
        ← Back to memories
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center text-gray-900 mb-12">
        {story.title}
      </h1>

      {/* Card */}
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={story.image}
              alt={story.title}
              className="max-h-[75vh] rounded-2xl shadow-lg object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-gray-800 text-lg leading-relaxed font-serif">
            <p className="whitespace-pre-line">
              {story.text}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center gap-4">
        {prevStory ? (
          <button
            onClick={() => navigate(`/story/${prevStory.id}`)}
            className="flex flex-col items-start bg-white/80 hover:bg-white px-6 py-4 rounded-2xl shadow-md transition"
          >
            <span className="text-xs text-gray-500">← Previous</span>
            <span className="font-serif text-gray-800">
              {prevStory.title}
            </span>
          </button>
        ) : (
          <div />
        )}

        {nextStory && (
          <button
            onClick={() => navigate(`/story/${nextStory.id}`)}
            className="flex flex-col items-end bg-white/80 hover:bg-white px-6 py-4 rounded-2xl shadow-md transition"
          >
            <span className="text-xs text-gray-500">Next →</span>
            <span className="font-serif text-gray-800">
              {nextStory.title}
            </span>
          </button>
        )}
      </div>
      {/* All memories grid */}
{/* All memories grid */}
<div className="max-w-6xl mx-auto mt-20">
  <h2 className="text-2xl font-serif text-center mb-8 text-gray-800">
    All Memories
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {stories.map((s, i) => (
      <button
        key={s.id}
        onClick={() => navigate(`/story/${s.id}`)}
        className="
          bg-white/80
          backdrop-blur
          rounded-2xl
          p-4
          shadow
          hover:shadow-xl
          hover:scale-[1.03]
          transition
          text-sm
          text-gray-800
          font-serif
          focus:outline-none
          focus:ring-2
          focus:ring-pink-400
        "
      >
        <div className="font-medium">
          {i + 1}. {s.title}
        </div>
      </button>
    ))}
  </div>
</div>


    </div>
  )
}
