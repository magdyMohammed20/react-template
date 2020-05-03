import React, { useEffect, useRef } from 'react';
import { HomeStyle, HomeContent, HomeTitle } from './style'

const Home = () => {

    const LandingRef = useRef()

    useEffect(() => {
        LandingRef.current.style.height = window.innerHeight - 56 + 'px'
    })
    return (
        <HomeStyle className='landing position-relative' ref={LandingRef}>
            <HomeContent className='container text-center position-absolute'>
                <HomeTitle>Magdy Mohammed</HomeTitle>
                <p className='my-4 text-white px-5'>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
                <button className='btn bg-white text-dark px-5 py-3 rounded-0'>
                    More Info
                </button>
            </HomeContent>
        </HomeStyle>
    );
};

export default Home;