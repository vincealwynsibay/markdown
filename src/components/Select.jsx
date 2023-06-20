import React from "react";

function Select({ handleState, states }) {
  return (
    <div className="select">
      {states.map((state) => {
        return <p onClick={() => handleState(state)}>{state}</p>;
      })}
    </div>
  );
}

export default Select;
