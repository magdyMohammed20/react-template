import styled from 'styled-components'

export const ImgContainer = styled.div`
    position: relative;

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6)
    }
`