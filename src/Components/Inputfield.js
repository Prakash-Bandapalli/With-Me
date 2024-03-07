import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
const InputField = (props) => {
  const [inputH, setInputH] = useState("");
  const [inputC, setInputC] = useState("");
  const [field, setField] = useState(false);
  const handleChange1 = (event) => {
    setInputH(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputC(event.target.value);
  };
  
  const handleField = (event)=>{
    setField(true);
  }
  return (
    <div className="field">
      <div className="holder">
        {field && (
          <input
            placeholder="Title"
            onChange={handleChange1}
            value={inputH}
          ></input>
        )}
        <textarea
          placeholder="Take a note..."
          onChange={handleChange2}
          value={inputC}
          rows={field ? 3 : 1}
          onClick={handleField}
        ></textarea>
      </div>
      <Zoom in={field}>
        <Fab
          className="btn"
          onClick={(event) => {
            props.onAdd(inputH, inputC, event);
            setInputH("");
            setInputC("");
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
};
export default InputField;
