import { useNavigate, Link } from "react-router-dom"
import stories from "../data/stories"

export default function Memories() {
  const navigate = useNavigate()

  return (
    <>
      {/* Top-right Home link */}
      <div className="fixed top-16 right-10 z-30">
        <Link
          to="/"
          className="
            px-5 py-2
            rounded-full
            bg-white/70 backdrop-blur
            text-sm font-medium text-gray-900
            shadow-md
            hover:bg-white
            hover:scale-105
            transition
          "
        >
          Home
        </Link>
      </div>

      <div
        className="
          min-h-screen
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
          from-pink-100
          via-pink-200
          to-pink-300
          px-6
          py-20
          fade-in
          font-serif
        "
      >
        <h1 className="text-5xl md:text-6xl text-center font-bold text-gray-900">
          Our Memories
        </h1>

        <p className="mt-4 text-center text-gray-600 italic">
          Moments that quietly built US
        </p>

        <div
          className="
            mt-16
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >
          {stories.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/story/${s.id}`)}
              className="
                group
                relative
                bg-white/70
                backdrop-blur-xl
                rounded-3xl
                p-8
                text-left
                shadow-[0_20px_40px_rgba(236,72,153,0.15)]
                hover:shadow-[0_30px_60px_rgba(236,72,153,0.25)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-pink-300/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              />

              <div className="relative z-10">
                <h3
                  className="
                    text-xl
                    text-gray-900
                    leading-snug
                    group-hover:text-pink-700
                    transition
                  "
                >
                  {s.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
