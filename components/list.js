import React from 'react'

export default function list({ items = [], title = '', id }) {
  return (
    <nav className="list" aria-labelledby={id}>
      <h2 className="list-title" id={id}>{title}</h2>
      <ul className="list-content">
        {
          items.map(item => (
            <li className="list-item" key={item.title}>
              <a href={item.link} className="link">{item.title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
