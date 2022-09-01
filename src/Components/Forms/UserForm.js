import { useState } from "react";

function UserForm() {
  const defaultFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: null,
    dob: "",
    tnc: false,
  };

  const errorState = {
    firstName: "",
    email: "",
    phone: "",
    gender: null,
    dob: "",
  };

  const touchState = {
    firstName: false,
    email: false,
    phone: false,
    gender: null,
    dob: "",
  };
  const [formState, setFormState] = useState(defaultFormState);
  const [errorForm, setErrorForm] = useState(errorState);
  const [touchedElements, setTouchedElements] = useState(touchState);

  function changeHandler(event, inputKey) {
    const value = event.target.value;

    setFormState((oldState) => ({ ...oldState, [inputKey]: value }));
    updateValidationCheck(event, inputKey);
  }

  function nonRequiredInputs() {
    return ["lastName", "tnc"];
  }

  function onBlurHandler(event, inputKey) {
    let touchedobj = {};
    touchedobj[inputKey] = true;
    setTouchedElements((oldState) => ({ ...oldState, ...touchedobj }));

    updateValidationCheck(event, inputKey);
  }

  function updateValidationCheck(event, inputKey) {
    let errorObj = {};
    const val = event.target.value;

    // validation for name.....

    if (inputKey === "firstName") {
      if (val && !val.match(/.*[0-9].*/)) {
        errorObj[inputKey] = "";
      } else if (val && val.match(/.*[0-9].*/)) {
        errorObj[inputKey] = "Name shoud contain string only";
      } else {
        errorObj[inputKey] = "Required";
      }
    }

    // validation for email.....

    if (inputKey === "email") {
      if (val && val.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        errorObj[inputKey] = "";
      } else if (val && !val.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        errorObj[inputKey] = "Enter a valid email";
      } else {
        errorObj[inputKey] = "Required";
      }
    }

    // phone

    if (inputKey === "phone") {
      if (
        val &&
        isFinite(val) &&
        val.length === 10 &&
        Number(val) > 999999999
      ) {
        errorObj[inputKey] = "";
      } else if (
        !(val && isFinite(val) && val.length === 10 && Number(val) > 999999999)
      ) {
        errorObj[inputKey] = "Enter a valid phone Numebr";
      } else {
        errorObj[inputKey] = "Required";
      }
    }

    // if (inputKey)
    //   if (!!val) {
    //     // reset the error
    //     errorObj[inputKey] = "";
    //   }
    setErrorForm((oldState) => ({ ...oldState, ...errorObj }));
  }

  function validateForm() {
    //1. check for the requred blank fields....

    let isFormValid = true;
    let errorObj = {};
    for (let inputState in formState) {
      console.log(inputState);
      if (!formState[inputState] && !nonRequiredInputs().includes(inputState)) {
        errorObj[inputState] = "Required";
        isFormValid = false;
      } else if (
        !(!formState[inputState] && !nonRequiredInputs().includes(inputState))
      ) {
        errorObj[inputState] = "";
      }
    }

    setErrorForm((oldState) => ({ ...oldState, ...errorObj }));

    return isFormValid;
  }

  function onFormSubmition(event) {
    event.preventDefault();
    //1. i should check every state if the field is required or not
    validateForm();
    // 2. if form is valid then console.log(); //  send the results to the sever...
  }

  return (
    <>
      <form onSubmit={(e) => onFormSubmition(e)}>
        <label>FirstName *: </label>
        <input
          onChange={(e) => changeHandler(e, "firstName")}
          onBlur={(e) => onBlurHandler(e, "firstName")}
          placeholder="First Name"
        />
        <span style={{ color: "red" }}>{errorForm.firstName}</span>
        <br />
        <label>LastName: </label>
        <input
          onChange={(e) => changeHandler(e, "lastName")}
          placeholder="last Name"
        />
        <br />
        <label>Email*: </label>
        <input
          value={formState.email}
          onBlur={(e) => onBlurHandler(e, "email")}
          onChange={(e) => changeHandler(e, "email")}
          placeholder="Email"
        />
        <span style={{ color: "red" }}>
          {touchedElements.email && errorForm.email}
        </span>
        <br />
        <label>Phone*: </label>
        <input
          onBlur={(e) => onBlurHandler(e, "phone")}
          onChange={(e) => changeHandler(e, "phone")}
          type={"number"}
          placeholder="Phone"
        />
        <span style={{ color: "red" }}>{errorForm.phone}</span>
        <br />
        <label>Gender*: </label>
        <select onChange={(e) => changeHandler(e, "gender")}>
          <option key={1}>Male</option>
          <option key={2}>FeMale</option>
        </select>
        <span style={{ color: "red" }}>{errorForm.gender}</span>
        <br />
        <label>Dob*: </label>
        <input
          onChange={(e) => changeHandler(e, "dob")}
          type={"date"}
          placeholder="dob"
        />
        <span style={{ color: "red" }}>{errorForm.dob}</span>
        <br />
        <input onChange={(e) => changeHandler(e, "tnc")} type={"checkbox"} />
        terms and condition
        <br />
        <input type={"submit"} value={"submit"} />
      </form>
    </>
  );
}

export default UserForm;
