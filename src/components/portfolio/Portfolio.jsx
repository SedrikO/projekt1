import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">My projects</h2>
      <div className="portfolio__container">
    <div class="gallery">
    <span style={{"--i":1 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images4.alphacoders.com/678/thumb-1920-678317.jpg" alt="" />
    </span>
    <span style={{"--i":2 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images5.alphacoders.com/653/653698.jpg" alt="" />
    </span>
    <span style={{"--i":3 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images6.alphacoders.com/883/thumb-1920-883643.jpg" alt="" />
    </span>
    <span style={{"--i":4 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images4.alphacoders.com/678/thumb-1920-678317.jpg" alt="" />
    </span>
    <span style={{"--i":5 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images4.alphacoders.com/678/thumb-1920-678317.jpg" alt="" />
    </span>
    <span style={{"--i":6 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images4.alphacoders.com/678/thumb-1920-678317.jpg" alt="" />
    </span>
    <span style={{"--i":7 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images4.alphacoders.com/678/thumb-1920-678317.jpg" alt="" />
    </span>
    <span style={{"--i":8 }} onClick={()=> window.open("https://www.delfi.ee", "_blank")}>
    <img src="https://images4.alphacoders.com/678/thumb-1920-678317.jpg" alt="" />
    </span>
        </div>
        </div>
        </section>
  )
}

export default Portfolio