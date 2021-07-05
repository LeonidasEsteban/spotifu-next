import React from 'react'


export default function navi() {


  function handleBackClick() {
    history.back()
  }
  function handleNextClick() {
    history.forward()
  }

  return (
    <div className="navigation">
      <button onClick={handleBackClick} className="navigation-prev" aria-label="Volver" title="Volver">
        <i className="icon-arrowLeft" aria-hidden="true"></i>
      </button>
      <button onClick={handleNextClick} className="navigation-next" aria-label="Avanzar" title="avanzar">
        <i className="icon-arrowRight" aria-hidden="true"></i>
      </button>
    </div>
  )
}
