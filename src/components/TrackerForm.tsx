import { useForm, type FieldValues } from "react-hook-form";

function TrackerForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors);

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          {...register("description", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        ></input>
      </div>
      {errors.description?.type === "required" && (
        <p className="text-danger">Description is required</p>
      )}

      {errors.description?.type === "minLength" && (
        <p className="text-danger">Minimum length is 3 characters</p>
      )}

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          {...register("amount", { required: true })}
          type="number"
          className="form-control"
        ></input>
      </div>
      {errors.amount?.type === "required" && (
        <p className="text-danger">Amount is required</p>
      )}

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
    
        <select
          id="category"
          className="form-control"
        >
          <option value=""></option>
          <option value="">Groceries</option>
          <option value="">Utilities</option>
          <option value="">Entertainment</option>
        </select>
      </div>

     

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default TrackerForm;
