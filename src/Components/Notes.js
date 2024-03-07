import DeleteIcon from "@mui/icons-material/Delete";
const Notes = (props) => {
  return (
    <div className="notes">
      <h1>{props.title}</h1>
      <p>{props.info}</p>
      <button
        className="del"
        onClick={(event) => props.onDelete(props.index, event)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};
export default Notes;
