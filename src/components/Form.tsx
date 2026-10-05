import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
    name: string;
    age: number

}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
          {errors.name?.type === "required" && <p className = "text-danger">The name field is required</p>}
          {errors.name?.type === "minLength" && <p className = "text-danger">The minimum number of characters should be 3</p>}

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
