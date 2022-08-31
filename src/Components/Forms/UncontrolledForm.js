import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  console.log("RENDERING: UncontrolledForm");

  function handleSubmit(event) {
    event.preventDefault();
    const name = inputRef.current.value;

    if (isFinite(name)) {
      console.log("wrong number");
    } else {
      console.log("right number");
    }
    // cant you call an api to save this

    // get the response and save the response on updating the state ..

    console.log("handleSubmit", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* // fomr  */}

      <input
        ref={inputRef}
        type={"text"}
        placeholder={"Enter your name"}
      ></input>
      {/* <input type={"text"} placeholder={"Enter your phoneNumber"}></input> */}

      {/* <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select> */}

      <input type="submit" value="Submit" />
    </form>
  );
}

export default UncontrolledForm;
