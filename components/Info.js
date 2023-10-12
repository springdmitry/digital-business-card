import React from 'react'

export default function Info() {
    return (
        <header>
            <img src="images/dmitro.jpg" className="my-img" alt="my photo" />
            <h2>Dmytro Shpringer</h2>
            <p>Frontend Developer</p>
            <a href="https://github.com/springdmitry?tab=repositories" target="_blank">github.com/springdmitry</a>
            <div className="links-container">
                <a className="btn email" href="mailto:shpringerd@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a className="btn linked-in" href="https://www.linkedin.com/in/shprinher-dmytro-a365a3119/" target="_blank">
                    <i className="fa-brands fa-linkedin" style={{ color: "#ffffff", }}></i>
                    LinkedIn
                </a>
            </div>
        </header>
    )
}