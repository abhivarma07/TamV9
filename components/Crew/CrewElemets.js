import styled from "styled-components";

export const TeamContainer = styled.div`
    height : 800px ;
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items: center ;
    background : #fff ;

    @media screen and (max-width: 800px){
        height: 1400px ;
    }

    @media screen and (max-width: 571px){
        display:none ;
    }
`

export const TeamWrapper = styled.div`
    max-width: 1000px ;
    margin : 0 auto ; 
    display : grid ;
    grid-template-columns : 1fr 1fr 1fr ;
    align-items : center ;
    grid-gap : 20px ;
    padding: 0 50px ;

    @media screen and (max-width: 800px){
    grid-template-columns : 1fr 1fr ;
    }

    @media screen and (max-width: 400px){
        grid-template-columns : 1fr ;
    }
    
`