import { useState, useEffect } from "react";

import PropTypes from "prop-types";

export default function WishItem({ wish, onCompletedChange }) {
  const [edad, setEdad] = useState;

  useEffect(() => {
    let ageInterval;
    if (wish.done) {
      // si el deseo es completado dejo de contar
      // y limpio el intervalo
      setEdad(0);
      clearInterval(ageInterval);
    } else {
      // si el deseo no está completado
      // creo un intervalo que incrementa en 1
      // la edad del deseo cada 1000 milisegundos
      ageInterval = setInterval(() => {
        setEdad((currentAge) => currentAge + 1);
      }, 1000);
    }
    // la función que devuelve return se ejecuta
    //  solo cuando se desmonta el componente
    return () => clearInterval(ageInterval);
  }, [wish.done, setEdad]);

  return (
    <li
      key={wish.id}
      id="li{wish.id}2"
      className={`
            wish-list__item
            ${wish.done ? "wish-list__item--done" : ""}
            ${edad >= 5 && edad < 10 ? "wish-list__item--warn" : ""}
            ${edad >= 10 ? "wish-list__item--danger" : ""}
            `}
    >
      <input
        type="checkbox"
        checked={wish.done}
        id="{whish.id}"
        onChange={(e) => {
          onCompletedChange(e.target.checked);
        }}
      />
      <label htmlFor="{whish.id}">{wish.text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wish: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.text,
    done: PropTypes.bool,
  }).isRequired,
  onCompletedChange: PropTypes.func.isRequired,
};
