import styled from 'styled-components'

export const HomeStyle = styled.div`
    background-image: url('images/Home/home-bg.jpg');
    height: 500px;
    background-size: cover;


    &:before{
        content: '';
        position: absolute;
        top: 0; 
        left: 0; 
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.7);

    }
`

export const HomeContent = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const HomeTitle = styled.h1`
    color: #50a3fb
`