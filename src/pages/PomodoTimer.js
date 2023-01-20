import React, { useEffect, useContext }  from 'react';
import '../components/timer.css'
import TimerButton from '../components/TimerButton'
import CountdownAnimation from '../components/CountdownAnimation'
import SetPomodoro from '../components/SetPomodoro'
import { SettingsContext } from '../context/SettingsContext'

const PomodoTimer = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div id="timer">
      <h1 id="heading">PomodoTimer</h1>
      <small id="text">Pick one task you want to do and set the timer. 
        Once you finish your task, have short break.<br/>
        Have a long break once you complete 4 tasks.
      </small>
      {pomodoro !== 0 ?
      <>
        <ul id="labels">
          <li>
            <TimerButton
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <TimerButton
              title="Short Break" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <TimerButton
              title="Long Break" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        <TimerButton title="Settings" _callback={SettingsBtn} />
        <div id="timer-container">
          <div id="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div id="button-wrapper">
          <TimerButton title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <TimerButton  title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}


export default PomodoTimer;