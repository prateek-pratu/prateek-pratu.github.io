import React, { useState } from "react";

function Input (props) {
  const [item, setItem] = useState({
    name: "",
    qty: "",
  });

  function save() {
    if (item.name === "") {
      alert("item is empty");
    } else {
      props.onSave(item);
      setItem({
        name: "",
        qty: "",
      });
    }
  }
  return (
    <div className="d-flex h-2">
      <input
        className="form-control border-dark border-3"
        onChange={(event) => {
          let { name, value } = event.target;
          setItem((preValue) => {
            return { ...preValue, [name]: value };
          });
        }}
        
        type="text"
        placeholder="item name"
        value={item.name}
        name="name"
      />
      <input
      className="form-control border-dark border-3 me-2 ms-2"
        onChange={(event) => {
          let { name, value } = event.target;
          setItem((preValue) => {
            return { ...preValue, [name]: value };
          });
        }}
        type="text"
        placeholder="quantity"
        value={item.qty}
        name="qty"
      />
      <button type="button" class="add-btn btn btn-outline-primary" onClick={save}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
        Add Item
      </button>
    </div>
  );
};

export default Input;