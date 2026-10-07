import { useState, type ChangeEvent } from "react";

interface Item {
  description: string;
  amount: string;
  category: string;
}

function Table() {
  const objs = [
    { description: "Milk", amount: "$5", category: "Groceries" },
    { description: "Eggs", amount: "$10", category: "Groceries" },
    { description: "Electricity", amount: "$100", category: "Utilities" },
    { description: "Movies", amount: "$15", category: "Entertainment" },
    { description: "Milk", amount: "$5", category: "Groceries" },
  ];

  const [items, setItems] = useState(objs);

  function changeHandler(event: ChangeEvent<HTMLSelectElement>) {
    const newItems: Item[] = [];
    objs.map((obj) => {
      if (obj.category === event.target.value) {
        newItems.push(obj);
        setItems(newItems);
      }
    });
  }
  return (
    <>
      <select className="form-control mt-5" onChange={changeHandler}>
        <option id="all" value="categories">
          All Categories
        </option>
        <option id="groceries" value="Groceries">
          Groceries
        </option>
        <option id="utilities" value="Utilities">
          Utilities
        </option>
        <option id="Entertainment" value="Entertainment">
          Entertainment
        </option>
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
                <td key={index}>{item.description}</td>
                <td key={index}>{item.amount}</td>
                <td key={index}>{item.category}</td>
                <td key={index}>
                  <button className="btn btn-outline btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
