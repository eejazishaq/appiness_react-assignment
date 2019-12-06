import React from "react";
import { withRouter } from "react-router-dom";

import "./item.styles.scss";

const Item = ({ age, email, gender, name, phoneNo }) => (
  <>
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNo}</td>
      <td>{age}</td>
      <td>{gender}</td>
    </tr>
  </>
);

export default Item;
