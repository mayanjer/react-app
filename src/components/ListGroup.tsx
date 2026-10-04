import { useState } from "react";

function ListGroup() {

    let items = [
        "Kampala",
        "Kenya",
        "Momabasa",
        "Kigali"
    ]

    const [selectedItem, setSelectedItem] = useState(-1)

   

    return (
      <>
        <h1>List</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className = {selectedItem === index ? "list-group-item active": ""}
              key={item}
              onClick={() => {setSelectedItem(index)}}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup