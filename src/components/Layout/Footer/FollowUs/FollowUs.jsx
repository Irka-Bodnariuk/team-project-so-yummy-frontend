import PropTypes from 'prop-types';
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { List, Item, Link } from './FollowUs.styled';

const FollowUs = ({ place, sizeIcon }) => {
  return (
    <List place={place}>
      <Item>
        <Link
          href="https://uk-ua.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsFacebook size={sizeIcon} />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsYoutube size={sizeIcon} />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsTwitter size={sizeIcon} />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsInstagram size={sizeIcon} />
        </Link>
      </Item>
    </List>
  );
};

FollowUs.propTypes = {
  place: PropTypes.string,
  sizeIcon: PropTypes.number.isRequired,
};

export default FollowUs;
