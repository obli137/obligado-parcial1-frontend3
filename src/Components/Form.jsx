import React, { useState } from "react";
import "../Styles/Form.css";
import Card from "./Card";

const Form = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    rol: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr(false);
    setShow(false);

    if (
      candidate.name.trim().length >= 3 &&
      !/^\s/.test(candidate.name) &&
      candidate.rol.length >= 6
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Nombre: </label>
        <input
          type="text"
          onChange={(event) =>
            setCandidate({ ...candidate, name: event.target.value })
          }
        />

        <label>Rol al que aplica: </label>
        <input
          type="text"
          onChange={(event) =>
            setCandidate({ ...candidate, rol: event.target.value })
          }
        />

        <label>Email:</label>
        <input
          type="text"
          onChange={(event) =>
            setCandidate({ ...candidate, email: event.target.value })
          }
        />

        <button type="submit">Postularme</button>
      </form>

      {show ? (
        <Card candidate={candidate} />
      ) : (
        <h4>Complete sus datos para postularse a la búsqueda.</h4>
      )}

      {err && (
        <p style={{ color: "red" }}>
          Debe colocar la información correctamente
        </p>
      )}
    </div>
  );
};

export default Form;
