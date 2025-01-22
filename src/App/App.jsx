import "./App.css";
import WishInput from "../WishInput/WishInput.jsx";
import Wishlist from "../Wishlist/Wishlist.jsx";
import { useState } from "react";

const initialWhishes = [
  { id: 1, text: "Learn React", done: true },
  { id: 2, text: "Learn Vite", done: true },
  { id: 3, text: "Learn React Query", done: false },
  { id: 4, text: "Learn React Router", done: false },
];

function App() {
  const [wishes, setWishes] = useState(initialWhishes);
  const onNewWish = (newWish) => {
    setWishes((wishes) => [newWish, ...wishes]);
  };
  return (
    <>
      <div id="versión 2">
        <h1>My whishes for daw2</h1>

        <WishInput onNewWish={onNewWish} />
        <Wishlist wishes={wishes} setWishes={setWishes} />

        <button
          id="button2"
          onClick={setWishes(wishes.filter((wish) => !wish.done))}
        >
          Archive{" "}
        </button>
      </div>
    </>
  );
}

export default App;
