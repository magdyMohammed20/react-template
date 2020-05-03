import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-image: url('images/creative/about-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px 25%;

    &:before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.8)
    }
`

export const AboutJob = styled.h1`
    color: #ffc107
`

export const AboutContent = styled.div`
    z-index: 999
`

export const Aboutp = styled.p`
    color: #adb5bd
`

export const SocialSection = styled.div`
    bottom: 0;

    & > div:nth-child(1){
        background-color: #3b5998
    }

    & > div:nth-child(2){
        background-color: #00aced
    }
    & > div:nth-child(3){
        background-color: #cb2027
    }
    
`
