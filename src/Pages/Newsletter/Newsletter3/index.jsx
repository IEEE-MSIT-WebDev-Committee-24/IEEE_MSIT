import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import '../style.css';
import coverImage from '../assets/cover.jpeg';
import page1 from '../assets/Newsletter3/page1.jpeg'
import page2 from '../assets/Newsletter3/page2.jpeg'
import page3 from '../assets/Newsletter3/page3.jpeg'
import page4 from '../assets/Newsletter3/page4.jpeg'
import page5 from '../assets/Newsletter3/page5.jpeg'
import last from '../assets/last.jpeg'

const Newsletter3 = () => {
  return (
    <HTMLFlipBook width={300} height={500} className='flipbook-container'>
            <p className='intro'>Newsletter 3</p>
            <img src={coverImage} alt="" className='flipbook-page' />
            <img src={page1} alt="" className='flipbook-page' />
            <img src={page2} alt="" className='flipbook-page' />
            <img src={page3} alt="" className='flipbook-page' />
            <img src={page4} alt="" className='flipbook-page' />
            <img src={page5} alt="" className='flipbook-page' />
            <img src={last} alt="" className='flipbook-page'/>
        </HTMLFlipBook>
  )
}

export default Newsletter3
