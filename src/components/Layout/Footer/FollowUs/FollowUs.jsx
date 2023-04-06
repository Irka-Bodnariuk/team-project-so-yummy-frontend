import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { List, Item } from "./FollowUs.styled";

const FollowUs = () => {
    return (
        <List>
            <Item>
                <BsFacebook color="#8BAA36"/>
            </Item>
            <Item>
               <BsYoutube color="#8BAA36"/>
            </Item>
            <Item>
                <BsTwitter color="#8BAA36"/>
            </Item>
            <Item>
                <BsInstagram color="#8BAA36"/>
            </Item>
        </List>
    )
}

export default FollowUs;