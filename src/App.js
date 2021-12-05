import { useState, useEffect } from "react"
import './App.css';
import logo from "../src/image/logo.png"
const App = () => {
  const [days, setDays] = useState(10)
  const [hours, setHours] = useState(10)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState(10)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("December 6, 2021 12:00:00").getTime()
      const today = new Date().getTime()

      const timeDiff = endDate - today

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24

      let timeDays = Math.floor(timeDiff / days)
      let timeHours = Math.floor((timeDiff % days) / hours)
      let timeMinutes = Math.floor((timeDiff % hours) / minutes)
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)
      setIsLoading(false)
    }

    setInterval(countdown, 1000)
  }, [])

  return (
    <div className="parent" >
      <div style={{display:"flex",justifyContent:"center"}}>
      <img src={logo} alt="" style={{width:"400px",height:"400px" , marginBottom:"-10vh",marginTop:"10vh"}}/>
      </div>

   
 <>
      {isLoading ? (
        <div className="loading" style={{marginTop:"-60vh"}}>
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="container">
          <h1></h1>

          <div className="countdown">
            <article>
              <p>{minutes}</p>
            </article>
            <article>
              <h1 style={{color: "#fdd409", fontSize:"25px" }}>:</h1>               
            </article>

            <article>
              <p>{seconds}</p>
            </article>

           
          </div>

          <div>
            <h3 style={{color: "#fdd409" , fontSize: "25px" , fontWeight:"800" }}>Coming Up !</h3>
            </div>
        </section>
      )}
    </>
    </div>
   
  )
}

export default App
