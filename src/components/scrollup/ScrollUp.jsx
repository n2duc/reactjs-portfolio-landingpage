import React from 'react'
import './scrollup.css'

const ScrollUp = () => {

    window.addEventListener('scroll', function() {
        const scrollUp = document.querySelector('.scrollup')
        if (this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll')
        } else {
            scrollUp.classList.remove('show-scroll')
        }
    })

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <div onClick={scrollToTop} className="scrollup">
            <i className="uil uil-arrow-up scroll__icon"></i>
        </div>
    )
}

export default ScrollUp