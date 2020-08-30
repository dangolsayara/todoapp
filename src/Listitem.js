import React from "react";
import "./Listitem.css";

//returns the item to the list
function Listitem(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          {item.text}
          <button
            className="del-btn"
            onClick={() => props.deleteItem(item.key)}
          >
            -
          </button>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default Listitem;
