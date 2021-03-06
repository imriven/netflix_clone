import styled from "styled-components/macro"
import { Link as ReactRouterLink } from "react-router-dom"

export const Background = styled.div`
display: flex;
flex-direction: column;
background: url(${({ src }) => (src ? "../images/misc/${src}.jpg" : "../images/misc/home-bg.jpg")})
top left / cover no-repeat;


// good for static site bad for dynamic site
`;



export const Container = styled.div`
display: flex;
margin: 0 56px;
height: 65px;
padding: 18px 0;
justify-content: space-between;
align-items: center;
`;

export const ButtonLink = styled(ReactRouterLink)`
display: block;
background-color: #e50914;
width: 84px;
height: fit-content;
color: white;
border: 0;
font-size: 15px;
border-radius: 3px;
padding: 8px 17px;
cursor: pointer;
text-decoration: non e;
box-sizing: border-box;

&:hover {
    background-color: #f40612;
}
`;

export const Logo = styled.img`
height: 32px;
width: 108px;
margin-right: 40px;

@media (min-width: 1449px) {
    height: 45px;
    width: 167px;
}
`;