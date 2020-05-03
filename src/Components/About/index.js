import React, { useEffect, useRef, useState } from 'react';
import { AboutContainer, AboutJob, AboutContent, Aboutp, SocialSection } from './style'
import axios from 'axios'

const About = () => {
    const LandingRef = useRef()
    const [social, setSocial] = useState([])

    useEffect(() => {
        LandingRef.current.style.height = window.innerHeight - 56 + 'px'
    })

    useEffect(() => {
        async function fetchSocialData() {
            const result = await axios.get('Api/data.json')
            setSocial(result.data.social)
        }
        fetchSocialData()
    })

    const allSocialData = social.length > 0 ?
        social.map(socialItem => {
            return (
                <div className='col-4 p-4 text-center text-white' key={socialItem.id}>
                    <i className={socialItem.icon}></i>
                    <span className='ml-2'>{socialItem.title} {socialItem.body}</span>
                </div>
            )
        })
        : '';
    return (
        <AboutContainer ref={LandingRef} className='position-relative'>
            <div className='ml-auto w-50 h-100 d-flex align-items-center'>
                <AboutContent>
                    <h1 className='text-white'>This Is Me</h1>
                    <AboutJob className='font-weight-bold'>Front End Developer</AboutJob>
                    <Aboutp className='pr-5 mt-5'>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </Aboutp>
                    <Aboutp className='pr-5'>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </Aboutp>
                </AboutContent>
            </div>
            <SocialSection className='d-flex position-absolute w-100'>
                {allSocialData}
            </SocialSection>
        </AboutContainer>
    );
};

export default About;