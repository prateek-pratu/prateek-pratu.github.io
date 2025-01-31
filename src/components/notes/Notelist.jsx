import React, { useState } from "react";


function Notelist (props) {
  const [isdone, setDone] = useState(false);
  const [qant, setQant] = useState(props.q);
  const [isedit, setEdit] = useState(false);
  function handleEdit(event) {
    setQant(event.target.value);
  }

  function edit() {
    setEdit(true);
  }

  return (
    <tr>
      <td>
        <p className="text-center" style={{ textDecoration: isdone && "line-through"}}>{props.i}</p>
      </td>

      <td>
        <p className="text-center" style={{ textDecoration: isdone ? "line-through" : "none" }}>
          {props.q}
        </p>
      </td>

      <td>
        <label>
          <input
            type="checkbox"
            placeholder="done"
            onClick={() => {
              setDone(!isdone);
            }}
          />
          done
        </label>
      </td>

      <td>
        <button class="btn btn-danger"
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          {/* delete */}
        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
        </button>
      </td>

      <td>
        {isedit ? (
          <div>
            <input
            className="form-control border-bottom border-dark"
              type="text"
              onChange={handleEdit}
              placeholder="qty"
              value={qant}
            />
            <button class="btn btn-info"
              onClick={() => {
                props.onEdit(qant, props.id);
                setEdit(false);
              }}
            >
              {/* done */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
</svg>
            </button>
          </div>
        ) : (
          <button class="btn btn-outline-dark" onClick={edit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
            edit
            </button>
        )}
      </td>
    </tr>
  );
};

export default Notelist;