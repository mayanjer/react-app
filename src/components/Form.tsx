import { useForm, type FieldValues } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        ></input>
      </div>
      {errors.name?.type === "required" && <p>The name field is required</p>}

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", {required: true})}
          id="age"
          type="number"
          className="form-control"
        ></input>
          </div>
          {errors.age?.type === "required" && <p>The age is required</p>}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
