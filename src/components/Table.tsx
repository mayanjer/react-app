function Table() {
    const objects = [
      { description: "Milk", amount: "$5", category: "Groceries" },
      { description: "Eggs", amount: "$10", category: "Groceries" },
      { description: "Electricity", amount: "$100", category: "Utilities" },
      { description: "Movies", amount: "$15", category: "Entertainment" },
      { description: "Milk", amount: "$5", category: "Groceries" },
    ];
  return (
    <>
      <select className = "form-control mt-5">
        <option value="">All Categories</option>
        <option value="">Groceries</option>
        <option value="">Utility</option>
        <option value="">Entertainment</option>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
    </>
  );
}

export default Table;
