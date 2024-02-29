import React from "react";
import "../Styles/Card.css";

const Card = (props) => {
  const { candidate } = props;

  return (
    <div className="card">
      <h4>Su postulación fue exitosa, estos son sus datos:</h4>
      <p>Nombre: {candidate.name}</p>
      <p>Rol al que aplica: {candidate.rol}</p>
      <p>Email: {candidate.email}</p>
    </div>
  );
};

export default Card;
