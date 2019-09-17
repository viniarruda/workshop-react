import React, { useState, useEffect } from "react";

const Step02 = () => {
  const [name, setName] = useState("React");

  useEffect(() => {
    setName("React Js");
  }, []);

  return (
    <div>
      <h1>Function Component</h1>
      <p>{name}</p>
    </div>
  );
};

export default Step02;
