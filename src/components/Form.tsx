import { useRef, type SubmitEvent } from "react";

function Form() {

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef(null)

    const submitHandler = function (event: SubmitEvent) {
        event.preventDefault();

        if (nameRef.current != null)
         console.log(nameRef.current.value);
    }
    return (
        <form action="" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" ref = {nameRef} type="text" className="form-control"></input>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
                <input id="age" ref={ ageRef }type="number" className="form-control"></input>
            </div>
            <button type = "submit" className = "btn btn-primary">Submit</button>
      </form>
    );
}

export default Form;
