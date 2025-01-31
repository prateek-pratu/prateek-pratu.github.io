import React, { useState } from "react";

import Input from "./Input";
import Notelist from "./Notelist";

function Notes() {
  const [notes, setNote] = useState([]);
  function saveNotes(note) {
    setNote((preValue) => {
      return [...preValue, note];
    });
  }

  function deletenote(id) {
    setNote((preValue) => {
      return preValue.filter((x, index) => {
        return index !== id;
      });
    });
  }
  function editnote(q, id) {
    const modiEmp = notes.map((x, index) => {
      if (index === id) {
        return { ...x, qty: q };
      }
      return x;
    });
    setNote(modiEmp);
  }

  function genelist(item, index) {
    return (
      <Notelist
        key={index}
        id={index}
        i={item.name}
        q={item.qty}
        onDelete={deletenote}
        onEdit={editnote}
      />
    );
  }

  return (
    <div className="notelist">
      <Input onSave={saveNotes} />
      <div className="list mt-2">
        <table>
          <thead>
            <tr>
              <th>
                <h3>Item </h3>
              </th>

              <th>
                <h3>Quantity</h3>
              </th>
            </tr>
          </thead>
          <tbody>{notes.map(genelist)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Notes;