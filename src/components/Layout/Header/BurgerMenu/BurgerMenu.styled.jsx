import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BgMobile from "images/bg/mobile-menu-bg-mob-1x-min.png";
import BgTablet from "images/bg/mobile-menu-bg-tab-1x-min.png";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Link = styled(NavLink)`
    display: inline-block;
    margin-top: 40px;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    font-size: 24px;
    color: #22252A;
    &.active {
        color: #8BAA36;
    }
`;

export const Wrapper = styled.div`
    position: fixed;
    z-index: 10;
    background-color: #EBF3D4;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 18px 16px;
    background-image: url(${BgMobile});
    background-repeat: no-repeat;
    background-position: bottom 0 right 0;

    @media screen and (min-width: 768px) {
        padding: 18px 32px;
        background-image: url(${BgTablet});
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;