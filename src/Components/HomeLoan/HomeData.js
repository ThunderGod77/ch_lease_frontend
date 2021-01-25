import { Button } from "reactstrap";
import React, { useState } from "react";
import InputAndTooltip from "./../InputAndTooltip";

import Result from "./../Result";

const Home = function (props) {
  const [costHouse, setCostHouse] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [rent, setRent] = useState(0);
  const [cagr, setCagr] = useState(0);
  const [discountingRate, setDiscountingRate] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [rentRate, setRentRate] = useState(0);
  const [time, setTime] = useState(0);

  const updateCostHouse = (e) => {
    setCostHouse(e.target.value);
  };
  const updateInterestRate = (e) => {
    setInterestRate(e.target.value);
  };
  const updateRent = (e) => {
    setRent(e.target.value);
  };
  const updateCagr = (e) => {
    setCagr(e.target.value);
  };
  const updateDiscountingRate = (e) => {
    setDiscountingRate(e.target.value);
  };
  const updateTaxRate = (e) => {
    setTaxRate(e.target.value);
  };
  const updateRentRate = (e) => {
    setRentRate(e.target.value);
  };
  const updateTime = (e) => {
    setTime(e.target.value);
  };

  const showTable = () => {
    calculate();
    calculateLease();
    setTable(true);
  };
  const opportunityCost = (year) => {
    const interestLost =
      +costHouse * (Math.pow(1 + +interestRate / 100, year) - 1);
    return interestLost;
  };

  const calculate = () => {
    const years = +time;
    const Result = [];
    const totalCost = 0;
    for (let i = 1; i < years + 1; i++) {
      let year = i;
      let opc = i === 1 ? +costHouse + opportunityCost(i) : opportunityCost(i);
    }
  };

  return (
    <>
      <InputAndTooltip
        id="CostHouse"
        label="Cost of the new House"
        placeholder="Cost of the house"
        tooltipText="Cost"
        typeI="number"
        iValue={costHouse}
        uValue={updateCostHouse}
      />
      <InputAndTooltip
        id="InterestRate"
        label="Bank Interest Rate"
        placeholder="Please enter the value of the insert rate."
        tooltipText="Home Loan interest rate."
        typeI="number"
        iValue={interestRate}
        uValue={updateInterestRate}
      />
      <InputAndTooltip
        id="Rent"
        label="Yearly rent of the house"
        placeholder="Please enter the yearly rent"
        tooltipText="Rental Savings"
        typeI="number"
        iValue={rent}
        uValue={updateRent}
      />
      <InputAndTooltip
        id="cagr"
        placeholder="CAGR of the house"
        tooltipText="Cumulative annual growth rate of the house"
        typeI="number"
        iValue={cagr}
        uValue={updateCagr}
      />
      <InputAndTooltip
        id="discountingRate"
        label="Discounting Rate"
        placeholder="Discounting Rate"
        tooltipText="Discounting rate given by the central bank of your country"
        typeI="number"
        iValue={discountingRate}
        uValue={updateDiscountingRate}
      />

      <InputAndTooltip
        id="taxRate"
        label="Income Tax Rate"
        placeholder="Please enter the income tax rate in your country"
        tooltipText="Income tax rate"
        typeI="number"
        iValue={taxRate}
        uValue={updateTaxRate}
      />
      <InputAndTooltip
        id="rentRate"
        label="Percentage of increase in rent"
        placeholder="Rent Rate"
        tooltipText="Yearly increase in rent (%)"
        typeI="number"
        iValue={rentRate}
        uValue={updateRentRate}
      />

      <InputAndTooltip
        id="time"
        label="Time period of use"
        placeholder="No. of years you are going to use the house."
        tooltipText="The number of years you are going to live in the house"
        typeI="number"
        iValue={time}
        uValue={updateTime}
      />
      <Button color="secondary" onClick={showTable}>
        Submit
      </Button>
      <div style={{ overflowX: "scroll", marginTop: "25px" }}>
        <h1>Results</h1>
        <h3>On Purchase</h3>
        {table && <PDTable data={data} totalCost={totalCost - residualValue} />}
      </div>
      <div style={{ overflowX: "scroll", marginTop: "25px" }}>
        <h3>On Lease</h3>
        {table && <PDTableLease data={leaseData} totalCost={leaseTotalCost} />}
      </div>
      {table && (
        <Result
          totalCost={totalCost}
          totalLeaseCost={leaseTotalCost}
          equipmentCost={equipmentCost}
        />
      )}
    </>
  );
};

export default Home;
