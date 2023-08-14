function InputTag(props) {
  const placestyle = {
    opacity: "0.4",
    backgroundColor: "#faf0d2",
  };
  const css = `
.my-element {
    background-color: #f00;
}`;

  return (
    <>
      <div class="form-group">
        <label for={props.id} style={{ padding: "8px" }}>
          {props.description}
        </label>
        <input
          style={placestyle}
          type="text"
          class="form-control"
          id={props.id}
          placeholder={props.description}
        />
      </div>
    </>
  );
}
export default InputTag;
