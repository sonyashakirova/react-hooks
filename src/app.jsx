import { useWindowScroll } from "./hooks/useWindowScroll"

export function App() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <div style={{ height: "1000px", width: "2000px" }}>
      <div style={{ position: "fixed" }}>
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      </div>
    </div>
  )
}
