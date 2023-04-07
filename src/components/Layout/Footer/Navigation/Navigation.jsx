import Nav from "../Nav/Nav";
import FollowUs from "../FollowUs/FollowUs";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import { Box } from "components/Box";
import {
    WrapperForLogo,
    Logo,
    IconLogo,
    WrapperForDescription,
    WrapperForNav,
    Wrapper,
    Description,
    ItemOfDescription,
    WrapperForText
} from "./Navigation.styled";
import { useMedia } from "hooks";

const Navigation = () => {
    const { screenType } = useMedia();

    return (
        <Box> 
            <Wrapper>
            <WrapperForNav>
              <WrapperForDescription>
                <WrapperForLogo>
                   <Logo to="/">
                    <IconLogo viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="12" fill="#FAFAFA"/>
                    <path d="M8.79883 8.89569V13.9857V14.0884V13.9857C8.79883 15.4391 9.43295 16.7258 10.4161 17.5586C10.8969 17.9658 11.2145 18.5157 11.2145 19.126V27.6223C11.2145 28.5669 12.0262 29.3334 13.0263 29.3334C14.0264 29.3334 14.838 28.5669 14.838 27.6223V19.126C14.838 18.5157 15.1557 17.9658 15.6364 17.5586C16.6196 16.7258 17.2537 15.4391 17.2537 13.9857V8.89569V13.9857" stroke="#8BAA36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.0254 14.5038V8.79999" stroke="#8BAA36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M29.3322 9.99976C29.3322 9.37007 28.7911 8.85901 28.1243 8.85901H26.9165C24.9151 8.85901 23.293 10.391 23.293 12.2813V19.1258C23.293 20.6133 24.3039 21.867 25.7087 22.3382V27.6221C25.7087 28.5667 26.5203 29.3333 27.5204 29.3333C28.5205 29.3333 29.3322 28.5667 29.3322 27.6221V22.5481V9.99976Z" stroke="#8BAA36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </IconLogo>
                   </Logo>
                    So Yummy
                </WrapperForLogo>
                {screenType !== "mobile" ? (
                <Description>
                    <ItemOfDescription>
                            Database of recipes that can be replenished
                    </ItemOfDescription>
                    <ItemOfDescription>
                            Flexible search for desired and unwanted <WrapperForText>ingredients</WrapperForText>
                    </ItemOfDescription>
                    <ItemOfDescription>
                            Ability to add your own recipes with photos
                    </ItemOfDescription>
                    <ItemOfDescription>
                            Convenient and easy to use
                    </ItemOfDescription>
                </Description>
                ) : null}

              </WrapperForDescription>
                <Nav />
            </WrapperForNav>
                <SubscribeForm />
            </Wrapper>
            <FollowUs/>
        </Box>
    )
}

export default Navigation;