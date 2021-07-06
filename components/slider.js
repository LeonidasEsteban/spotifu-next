import React, { useRef, useEffect, useState, memo } from 'react'

function Slider() {
  const thumb = useRef(null)
  const [activeThumb, setActiveThumb] = useState(false)
  const progressPercentage = '0%'
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
  }, [])
  console.log(activeThumb)
  function handleMouseMove(event) {
    if (activeThumb) {
      console.log(event.clientX)
    }
  }
  function handleMouseUp() {
    setActiveThumb(false)
  }
  function handleMouseDown(event) {
    setActiveThumb(true)
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    console.log(thumb.current.getBoundingClientRect, clientX)
  }
  return (
    <div className="slider">
      <div className="slider-progress" style={{ inlineSize: progressPercentage }}>
        <button
          ref={thumb}
          className="slider-buttton"
          aria-label="Controlar el progreso de la reproducción"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
        </button>
      </div>
    </div>
  )
}

export default memo(Slider)