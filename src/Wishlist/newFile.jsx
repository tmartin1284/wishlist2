import PropTypes from "prop-types";

Wishlist.PropTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.text,
      done: PropTypes.bool,
    })
  ),
  setWishes: PropTypes.func,
};
Wishlist.defaultProps = {
  wishes: [],
  setWishes: () => {},
};
