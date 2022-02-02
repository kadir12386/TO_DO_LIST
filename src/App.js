import { useState } from "react";
import TaskIcon from "@mui/icons-material/Task";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import "./App.css";

export default function App() {
  const [addText, setaddText] = useState(["eat", "read"]); //1.created
  const additems = (inputText) => {
    // addText.map((el) =>
    console.log([...addText, inputText]);
    setaddText([...addText, inputText]);
  };

  const deletelist = (idx) => {
    console.log("deletelist(id) is", idx);
    const removeIndex = idx;
    const remove = addText.filter((el, id) => id !== removeIndex);
    console.log("remove index list", remove);

    setaddText(remove);
  };
  // const [ooo, setooo] = useState(["a", "b", "c", "d"]);
  return (
    <div className="container">
      <div className="heading">
        <div>
          <TaskIcon fontSize="large" className="icon" />
        </div>
        <div>
          <h2>ToDoList</h2>
        </div>
      </div>
      <InputTextBox additems={additems} />
      <div>
        <ul>
          {addText.map((tolist, index) => {
            return (
              <ToDoList
                tolist={tolist}
                key={index}
                id={index}
                deletelist={deletelist}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function InputTextBox({ additems }) {
  const [inputText, setinputText] = useState("");
  const handeleChange = (event) => {
    const newValue = event.target.value;
    setinputText(newValue);
  };

  return (
    <div className="inputForm_conatiner">
      <div className="inputForm_conatiner__form">
        <input type="text" value={inputText} onChange={handeleChange} />
      </div>
      <div className="inputForm_conatiner__button">
        <button
          onClick={() => {
            additems(inputText);
            setinputText("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ToDoList({ tolist, id, deletelist }) {
  return (
    <div className="list_container">
      <div class="list_items">
        <li>{tolist}</li>
      </div>
      <div className="list_icons">
        <DeleteTwoToneIcon color="error" onClick={() => deletelist(id)} />
      </div>
    </div>
  );
}
