import React from "react";

export default function Profile() {
  const fun = () => {
    alert("Working");
  };
  return (
    <div>
      <button onClick={fun}>Alert</button>
    </div>
  );
}
