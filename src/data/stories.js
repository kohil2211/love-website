import storyTexts from "./storyTexts"
import storyTitles from "./storyTitles"

const stories = Array.from({ length: 124 }, (_, i) => {
  const number = 4466 + i

  return {
    id: `memory-${number}`,
    title: storyTitles[i] || `Memory ${i + 1}`,
    image: `/Us/IMG_${number}.PNG`,
    text:
      storyTexts[i] ||
      "Some moments are hard to put into words."
  }
})

export default stories
