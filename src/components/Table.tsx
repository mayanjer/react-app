import type { ChangeEvent } from "react";

function Table() {
  const items = [
    { description: "Milk", amount: "$5", category: "Groceries" },
    { description: "Eggs", amount: "$10", category: "Groceries" },
    { description: "Electricity", amount: "$100", category: "Utilities" },
    { description: "Movies", amount: "$15", category: "Entertainment" },
    { description: "Milk", amount: "$5", category: "Groceries" },
  ];
    
    function changeHandler(event : ChangeEvent<HTMLSelectElement>) {
        console.log(event.target)
    }
  return (
    <>
      <select className="form-control mt-5" onChange = {changeHandler}>
        <option id = "all" value="categories">All Categories</option>
        <option id = "groceries" value="groceries">Groceries</option>
        <option id = "utilities" value="utilities">Utility</option>
        <option id = "entertainment" value="entertainment">Entertainment</option>
      </select>

      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
