import { useState } from "react";
import { useMainContext } from "../store/mainStore";

const Inputs = (props) => {
  const { setData } = useMainContext();
  const [value, setValue] = useState("");

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const setNewNote = (event) => {
    event.preventDefault();
    setData((prev) => [{ note: value, isDone: false }, ...prev]);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={setNewNote}>
        <label>
          <p>{props.inputName}</p>
          <input
            type="text"
            value={value}
            className="myInput"
            onChange={handleChangeValue}
          />
        </label>
      </form>
    </div>
  );
};

export default Inputs;
