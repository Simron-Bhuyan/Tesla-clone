/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

function Header() {
    
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <div><a href="#">Model S</a></div>
                <div><a href="#">Model 3</a></div>
                <div><a href="#">Model X</a></div>
                <div><a href="#">Solar Roof</a></div>
                <div><a href="#">Solar Panels</a></div>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
            
        </Container>
    )
}
export default Header;

const Container = styled.div`
top: 0;
left: 0;
right: 0;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
z-index: 1;
`

const Menu = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
display: flex;
align-items: center;
flex: 1;
justify-content: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;//top and bottom =0 : left and right=10px
    flex-wrap: nowrap;
}

@media(max-width: 768px){
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;

a{
    font-weight: 600;
    text-transform: uppercase;
   margin-right: 10px;
    flex-wrap: nowrap;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;  
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
        font-weight: 600;
    }
}
`

const CustomClose = styled(CancelIcon)`
cursor: pointer;
`

const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
`