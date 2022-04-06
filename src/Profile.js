import React from "react";

export default function Profile(i) {
  const fun = () => {
    alert("Working");
  };
  return (
    <div>
      <p>{i.text}</p>
      <p>{i.data.name}</p>
      <button onClick={fun}>Click Me!!!</button>
    </div>
  );
}
