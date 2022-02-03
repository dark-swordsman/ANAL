export default function ArrowButton({ backgroundColor, hoverBackgroundColor, arrowColor, right, onClick }) {
  return (
    <button onClick={onClick} className={`${backgroundColor ?? ""}${hoverBackgroundColor ? `hover:${hoverBackgroundColor}` : ""}`}>
      <svg className={`px-2 h-5 ${right ? "-rotate-90" : "rotate-90"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={arrowColor} aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  )
}