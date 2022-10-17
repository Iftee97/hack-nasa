import { useState, useEffect } from "react"

function App() {
  const hackTextArr = [
    'starting hack!!!',
    ' 10% done...',
    ' 25% done...',
    ' 50% done...',
    ' 75% done...',
    ' 100% done!!! -- NASA HACKED'
  ]

  const [isOn, setIsOn] = useState(false)
  const [hackText, setHackText] = useState([])

  const handleClick = () => {
    setIsOn(!isOn)
    setHackText([])
  }

  useEffect(() => {
    if (isOn) {
      hackTextArr.forEach((text, index) => {
        let interval = setTimeout(() => {
          setHackText(prevText => [...prevText, text])
        }, 1000 * index)

        // setInterval clean up
        return () => {
          clearInterval(interval)
        }
      })
    }
  }, [isOn])

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Hack NASA</h1>
      <button onClick={handleClick}>start / stop</button>
      {isOn && hackText.length > 0 && hackText.map((text, index) => (
        <p key={index}>
          <strong>{text}</strong>
        </p>
      ))}
    </div>
  )
}

export default App
