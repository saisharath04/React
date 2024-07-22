import React, { useState } from "react";

const InputText = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    const currentCharacter = e.key;
    if (
      currentCharacter === "Enter" ||
      currentCharacter === " " ||
      currentCharacter === ","
    ) {
      const value = input;
      const newEmails = value
        .split(/[,\s\n]+/)
        .filter((email) => email.trim() !== "");
      setList([...list, ...newEmails]);
      setInput('');
    }
  };

  return (
    <div style={{ width: 300, border: "1px solid blue" }}>
      {list.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
      <input
        style={{ border: "none", outline: "none", padding: "10px" }}
        placeholder="enter here..."
        onChange={changeHandler}
        onKeyPress={handleKeyPress}
        value={input}
      />
    </div>
  );
};

export default InputText;
