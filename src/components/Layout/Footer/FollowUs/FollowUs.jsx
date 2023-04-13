import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { List, Item } from "./FollowUs.styled";
import { useSelector } from "react-redux";

const FollowUs = () => {
    const darkMode = useSelector((state) => state.theme);
    const color = darkMode.darkMode ? '#FAFAFA' : "#8BAA36";
    
    return (
        <List>
            <Item>
                <a href="https://uk-ua.facebook.com/"><BsFacebook color={color}/></a>
            </Item>
            <Item>
              <a href="https://www.youtube.com/"><BsYoutube color={color}/></a> 
            </Item>
            <Item>
               <a href="https://twitter.com/"><BsTwitter color={color}/></a> 
            </Item>
            <Item>
               <a href="https://www.instagram.com/"><BsInstagram color={color}/></a> 
            </Item>
        </List>
    )
}

export default FollowUs;