import React from "react";
import { Table, Toast, ToastBody, ToastHeader } from "reactstrap";

const PDTable = ({ data, totalCost }) => {
  return (
    <>
      <Table size="lg">
        <thead>
          <tr>
            <th>Buy Assumptions</th>
            {data.map((val, i) => {
              return <td>{"Year " + val[0]}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Cash Flow(Lease)</th>
            {data.map((val, i) => {
              return <td>{val[1]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Interest on Deposit</th>
            {data.map((val, i) => {
              return <td>{val[2]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Total Cash Flow</th>
            {data.map((val, i) => {
              return <td>{val[3]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">Discounting Rate</th>
            {data.map((val, i) => {
              return <td>{val[4]}</td>;
            })}
          </tr>
          <tr>
            <th scope="row">PV after discount factor</th>
            {data.map((val, i) => {
              return <td>{val[5]}</td>;
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
        <ToastHeader>Total cost on Leasing Product</ToastHeader>
        <ToastBody>{totalCost + " Rupees"}</ToastBody>
      </Toast>
    </>
  );
};

export default PDTable;
