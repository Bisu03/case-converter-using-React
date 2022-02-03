import React, { useState } from 'react'
import Navbar from '../component/Navbar'

export const TextForm = () => {
  const [text, setText] = useState('')

  const hendleClick = () => {
    setText(text.toUpperCase())
  }
  const hendleLowClick = () => {
    setText(text.toLowerCase())
  }
  const hendleClearClick = () => {
    setText("")
  }
  const hendelOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Enter text</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={hendelOnChange}
          id="floatingTextarea"
        ></textarea>

        <h1>Preview</h1>
        <p>{text} </p>
        <button
          type="button"
          className="btn btn-primary btn-lg my-3 mx-3"
          onClick={hendleClick}
        >
          convert to upper case
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg my-3 mx-3"
          onClick={hendleLowClick}
        >
          convert to lower case
        </button>
        <button
          type="button"
          className="btn btn-dark btn-lg my-3 mx-3"
          onClick={hendleClearClick}
        >
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h1>Text summery</h1>
        <p>
          {' '}
          {text.split(' ').length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(' ').length} minutes to read</p>
      </div>
    </>
  )
}
