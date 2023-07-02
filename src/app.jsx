import { useToggle } from "./hooks/useToggle"

export function App() {
  const [color, toggleColor] = useToggle(["blue", "orange", "cyan", "teal"])
  const [value, toggleValue] = useToggle()

  return (
    <div>
      <div>
        <button onClick={() => toggleColor()}>
          {color}
        </button>
        <button onClick={() => toggleColor("orange")}>
          set orange
        </button>
      </div>
      <div>
        <button onClick={() => toggleValue()}>
          {value.toString()}
        </button>
        <button onClick={() => toggleValue(true)}>
          set true
        </button>
      </div>
    </div>
  )
}
