import React from "react";
import classNames from "classnames";
import "./App.css";
import WishInput from "../WishInput/WishInput.jsx";

function App() {
  const whishes = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Learn Vite", done: true },
    { id: 3, text: "Learn React Query", done: false },
    { id: 4, text: "Learn React Router", done: false },
  ];

  return (
    <>
      {/* <div id="versión 1">
        <div></div>

        <h1>My whishes for daw2</h1>
        <div id="new whishes">
          <input type="text" id="new whish" />

          <button id="add">Add whish </button>
        </div>

        <div id="show whishes">
          <ul>
            {whishes.map((whish) => (
              <li key={whish.id} id="li{whish.id}">
                <input
                  type="checkbox"
                  checked={whish.done}
                  id="whish{whish.id}1"
                />
                <label htmlFor="whish{whish.id}1">{whish.text}</label>
              </li>
            ))}
          </ul>
          <button id="button1">Archive </button>
        </div>
      </div> */}

      <div id="versión 2">
        <h1>My whishes for daw2</h1>

        <WishInput />
        <Wishlist />

        <fieldset>
          <input type="text" id="new whish2" placeholder="Escribe aqui" />
          <legend>new whishes</legend>
        </fieldset>
        <div id="show whishes">
          <ul>
            {whishes.map(({ id, text, done }) => (
              <li key={id} id="li{id}2">
                <input type="checkbox" checked={done} id="whish{whish.id}2" />
                <label htmlFor="whish{whish.id}2">{text}</label>
              </li>
            ))}
          </ul>
          <button id="button2">Archive </button>
        </div>
      </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
