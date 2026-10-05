import { useRef, type SubmitEvent } from "react";

function Form() {

    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const person = {name : "", age:  0}

    const submitHandler = function (event: SubmitEvent) {
        event.preventDefault();

        if (nameRef.current !== null)
            person.name = nameRef.current.value;
        
        if (ageRef.current !== null)
            person.age = Number(ageRef.current.value)
        console.log(person)
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
