import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

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
                <div><a href="#">Model Y</a></div> 
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu></CustomMenu>
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