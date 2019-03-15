import React from "react";

const StaffRow = ({ user, style }) => {
  const {
    username,
    phone,
    email,
    status,
    accessOrders,
    accessProducts,
    accessSalesGroups,
    accessReports,
    accessAccounts
  } = user;
  return (
    <tr style={style}>
      <td className="text">{username}</td>
      <td className="text">{phone}</td>
      <td className="text">{email}</td>
      <td className="text">{accessOrders ? `是` : `否`}</td>
      <td className="text">{accessProducts ? `是` : `否`}</td>
      <td className="text">{accessSalesGroups ? `是` : `否`}</td>
      <td className="text">{accessReports ? `是` : `否`}</td>
      <td className="text">{accessAccounts ? `是` : `否`}</td>
      <td className="text">{parseInt(status) === 0 ? "active" : "inactive"}</td>
    </tr>
  );
};

export default StaffRow;
