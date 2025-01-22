import { useState } from "react";
import PropTypes from "prop-types";
import "../App/App.css";

function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState("");

  const addwish = (e) => {
    if ((e.type === "onClick" || e.key === "Enter") && newWish.length) {
      const newWishObject = {
        id: Date.now(),
        text: newWish,
        done: false,
      };
      //ahora insertamos el objeto

      onNewWish(newWishObject);
    }
  };

  return (
    <fieldset>
      <input
        type="text"
        id="new whish2"
        placeholder={newWish ? newWish : "Escribe aqui"}
        onKeyUp={addwish}
        onChange={(e) => setNewWish(e.target.value)}
      />
      <button onClick={addwish}>Añadir estado</button>
      <legend>new whishes</legend>
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func.isRequired,
};

export default WishInput;
