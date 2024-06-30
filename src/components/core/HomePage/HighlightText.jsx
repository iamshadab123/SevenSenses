import React from "react"

const HighlightText = ({ text }) => {
  return (
    <span className="bg-[#ffbe98] bg-clip-text text-5xl font-bold text-[#fbe0c3] text-transparent">
      {" "}
      {text}
    </span>
  )
}

export default HighlightText
