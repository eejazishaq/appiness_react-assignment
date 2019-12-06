import React, { useContext } from "react";

import Item from "../item/item.component";

import DashboardContext from "../../contexts/dashboard/dashboard.context";

const ItemList = () => {
  const items = useContext(DashboardContext);
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {items.user.map(({ id, ...otherSectionProps }) => (
          <Item key={id} {...otherSectionProps} />
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
