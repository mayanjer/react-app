
import { useForm, type FieldValues } from "react-hook-form";

function Form() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data : FieldValues) {
        console.log(data)
    }
 
 
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          type="text"
          className="form-control"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
              <input
                  {...register('age')}
          id="age"
     
          type="number"
          className="form-control"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
