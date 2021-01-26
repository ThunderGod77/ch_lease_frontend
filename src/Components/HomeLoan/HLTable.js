import React from "react";
import { Table, Toast, ToastBody, ToastHeader } from "reactstrap";

const BDTable = ({ data, totalCost }) => {
  return (
    <>
      <Table size="lg">
        <thead>
          <tr>
            <th>Lease Assumptions</th>
            {data.map((val, i) => {
              return <td>{"Year " + val[0]}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Oppotunity Cost(interest on Deposit)</th>
            {data.map((val, i) => {
              return <td>{val[1]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Rent</th>
            {data.map((val, i) => {
              return <td>{val[2]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Pre Tax Flow</th>
            {data.map((val, i) => {
              return <td>{val[3]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Tax Benefits</th>
            {data.map((val, i) => {
              return <td>{val[4]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Total Cash Flow</th>
            {data.map((val, i) => {
              return <td>{val[5]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Discounting Rate</th>
            {data.map((val, i) => {
              return <td>{val[6]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Discounted Cash Flow Rate</th>
            {data.map((val, i) => {
              return <td>{val[7]}</td>;
            })}
          </tr>
        </tbody>
      </Table>
      <Toast
        style={{
          marginBottom: "20px",
          backgroundColor: "teal",
          color: "white",
        }}
      >
        <ToastHeader>Total cost on Leasing the house</ToastHeader>
        <ToastBody>{totalCost + " Rupees"}</ToastBody>
      </Toast>
    </>
  );
};

export default BDTable;
