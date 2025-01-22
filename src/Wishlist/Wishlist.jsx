import "./WishItem.jsx";
import PropTypes from "prop-types";
import WishItem from "./WishItem.jsx";

export default function Wishlist({ wishes, setWishes }) {
  const onCompletedChange = (checked, i) => {
    const tempWishes = [...wishes];
    tempWishes[i].done = checked;
    setWishes(tempWishes);
  };

  return (
    <ul>
      {wishes.map((wish, i) => (
        <WishItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => {
            onCompletedChange(checked, i);
          }}
        />
      ))}
    </ul>
  );
}

Wishlist.propTypes = {
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
