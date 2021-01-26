import { Button } from "reactstrap";
import React, { useState } from "react";
import InputAndTooltip from "./../InputAndTooltip";
import HBTable from "./HBTable";
import HLTable from "./HLTable";

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
  const [deposit, setDeposit] = useState(0);
  const [r, setR] = useState([]);
  const [buyCost, setBuyCost] = useState(0);
  const [r2, setR2] = useState([]);
  const [leaseCost, setLeaseCost] = useState(0);
  const [table, setTable] = useState(false);
  const [name, setName] = useState("");
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
  const updateDeposit = (e) => {
    setDeposit(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
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
  const opportunityCostLease = (year) => {
    const interestLost =
      +deposit * (Math.pow(1 + +interestRate / 100, year) - 1);
    return interestLost;
  };
  const rentalSavings = (year) => {
    const re = +rent * Math.pow(1 + +rentRate / 100, year);
    return re;
  };
  const discountingRateC = (year) => {
    const discounting = Math.pow(1 - +discountingRate / 100, year);
    return discounting;
  };
  const houseCost = (year) => {
    const c = +costHouse * Math.pow(1 + +cagr / 100, year);
    return c;
  };

  const calculate = () => {
    const years = +time;
    let Result = [];
    let totalCost = 0;
    for (let i = 1; i < years + 1; i++) {
      let year = i;
      let opc =
        i === 1
          ? opportunityCost(i)
          : opportunityCost(i) - opportunityCost(i - 1);
      let totalEx = i === 1 ? opc + +costHouse : opc;
      let renS = rentalSavings(i) * 12;
      let cf = totalEx - renS;
      let discR = discountingRateC(i - 1);
      let discCF = discR * cf;
      let housePrice = houseCost(i);
      Result = Result.concat([
        [year, opc, totalEx, renS, cf, discR, discCF, housePrice],
      ]);
      totalCost += discCF;
    }
    totalCost = totalCost - houseCost(years);
    setR(Result);
    setBuyCost(totalCost);
  };
  const calculateLease = () => {
    const years = +time;
    let Result = [];
    let totalCost = 0;
    for (let i = 1; i < years + 1; i++) {
      let year = i;
      let opc =
        i === 1
          ? opportunityCostLease(i)
          : opportunityCostLease(i) - opportunityCostLease(i - 1);
      let rent = rentalSavings(i) * 12;
      let ptf = +rent + opc;
      let taxBf = ptf * (+taxRate / 100);
      let cf = ptf - taxBf;
      let discR = discountingRateC(i - 1);
      let discCF = discR * cf;

      Result = Result.concat([
        [year, opc, rent, ptf, taxBf, cf, discR, discCF],
      ]);
      totalCost += discCF;
    }
    setLeaseCost(totalCost);
    setR2(Result);
  };

  return (
    <>
      <InputAndTooltip
        id="name"
        label="Name of the new House"
        placeholder="Name of the house"
        tooltipText="Name"
        typeI="Text"
        iValue={name}
        uValue={updateName}
      />
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
        label="CAGR"
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
        id="Deposit"
        label="Deposit on Lease"
        placeholder="Deposit given to owner on lease"
        tooltipText="One time deposit given to the owner"
        typeI="number"
        iValue={deposit}
        uValue={updateDeposit}
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
        {table && <HBTable data={r} totalCost={buyCost} />}
      </div>
      <div style={{ overflowX: "scroll", marginTop: "25px" }}>
        <h3>On Lease</h3>
        {table && <HLTable data={r2} totalCost={leaseCost} />}
      </div>
      {table && (
        <Result
          totalCost={buyCost}
          totalLeaseCost={leaseCost}
          equipmentCost={costHouse}
        />
      )}
    </>
  );
};

export default Home;
