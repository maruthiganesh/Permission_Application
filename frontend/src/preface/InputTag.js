import { useRef } from "react";

const userData = [];

function InputTag(props) {
  const placestyle = {
    opacity: "0.6",
    backgroundColor: "#faf0d2",
  };
  const InputRef = useRef();
  function InputHandler(event) {
    const enteredValue = InputRef.current.valueOf;
    const inputName = props.id;
    userData.push({ inputName, enteredValue });
    console.log(userData);
  }
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
          ref={InputRef}
          placeholder={props.description}
          onChange={InputHandler}
        />
      </div>
    </>
  );
}
export { InputTag, userData };
// export enteredValue  ;
