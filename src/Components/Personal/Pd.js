import { Button } from "reactstrap";
import React, { useState } from "react";
import InputAndTooltip from "../InputAndTooltip";

import Result from "../Result";
import PDTable from "./PDTable";
import PDTableLease from "./PDTableLease";

const Bd = function (props) {
  const [productName, setProductName] = useState("");
  const [lease, setLease] = useState(0);
  const [equipmentCost, setEquipmentCost] = useState(0);
  const [residualValue, setResidualValue] = useState(0);
  const [maintainance, setMaintainance] = useState(0);
  const [life, setLife] = useState(0);
  const [interest, setInterest] = useState(0);
  const [discRate, setDiscRate] = useState(0);
  const [table, setTable] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const [data, setdata] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [leaseData, setLeaseData] = useState([]);
  const [leaseTotalCost, setLeaseTotalCost] = useState(0);
  const showTable = () => {
    calculate();
    calculateLease();
    setTable(true);
  };
  const updateProducName = (e) => {
    setProductName(e.target.value);
  };
  const updateLease = (e) => {
    setLease(e.target.value);
  };
  const updateResidualValue = (e) => {
    setResidualValue(e.target.value);
  };
  const updateMaintainance = (e) => {
    setMaintainance(e.target.value);
  };
  const updateEquipmentCost = (e) => {
    setEquipmentCost(e.target.value);
  };
  const updateLife = (e) => {
    setLife(e.target.value);
  };
  const updateinterest = (e) => {
    setInterest(e.target.value);
  };
  const updateDiscRate = (e) => {
    setDiscRate(e.target.value);
  };
  const updateDeposit = (e) => {
    setDeposit(e.target.value);
  };

  const opportunityCost = (year) => {
    const interestLost =
      +equipmentCost * (Math.pow(1 + +interest / 100, year) - 1);
    return interestLost;
  };
  const opportunityCostLease = (year) => {
    const interestLost = +deposit * (Math.pow(1 + +interest / 100, year) - 1);
    return interestLost;
  };

  const discountingRate = (year) => {
    const discounting = Math.pow(1 - +discRate / 100, year);
    return discounting;
  };

  const calculate = () => {
    let result = [];
    let totalCostf = 0;
    for (let i = 1; i < +life + 1; i++) {
      const year = i;
      const opC =
        i === 1
          ? opportunityCost(i)
          : opportunityCost(i) - opportunityCost(i - 1);
      const pTF = (i === 1 ? opC + +equipmentCost : opC) + +maintainance;

      const dR = discountingRate(i);
      const PVDR = dR * pTF;
      totalCostf += PVDR;
      result = result.concat([[year, opC, pTF, dR, PVDR]]);
    }
    setdata(result);
    setTotalCost(totalCostf);
  };
  const calculateLease = () => {
    let result = [];
    let totalCostf = 0;
    for (let i = 1; i < +life + 1; i++) {
      const year = i;

      const ptf = lease;
      const opC =
        i === 1
          ? opportunityCostLease(i)
          : opportunityCostLease(i) - opportunityCostLease(i - 1);
      const tf = lease + opC;

      const dR = discountingRate(i);
      const PVDR = dR * tf;
      totalCostf += PVDR;
      result = result.concat([[year, ptf, opC, tf, dR, PVDR]]);
    }
    setLeaseData(result);
    setLeaseTotalCost(totalCostf);
  };

  return (
    <>
      <InputAndTooltip
        id="Equipment"
        label="Product name"
        placeholder="Please enter the product name"
        tooltipText="The name of the product you are planning to buy."
        typeI="text"
        iValue={productName}
        uValue={updateProducName}
      />
      <InputAndTooltip
        id="CostEquipment"
        label="Cost of the Product"
        placeholder="Please enter the cost of the product you need"
        tooltipText="The total Cost of the product you are planning to buy."
        typeI="number"
        iValue={equipmentCost}
        uValue={updateEquipmentCost}
      />
      <InputAndTooltip
        id="Deposit"
        label="Deposit on Lease"
        placeholder="Please enter the deposit required to lease the product"
        tooltipText="Deposit"
        typeI="number"
        iValue={deposit}
        uValue={updateDeposit}
      />
      <InputAndTooltip
        id="YearlyMaintainance"
        label="Maintainance Costs"
        placeholder="Maintainance"
        tooltipText="Additional yearly costs"
        typeI="number"
        iValue={maintainance}
        uValue={updateMaintainance}
      />
      <InputAndTooltip
        id="Lease"
        label="Annual Lease of the quipment"
        placeholder="Annual rent of the product"
        tooltipText="Rent of the product"
        iValue={lease}
        uValue={updateLease}
        typeI="number"
      />
      <InputAndTooltip
        id="residualValue"
        label="Re Sale Value "
        placeholder="Please enter the approximate resell value of the product"
        tooltipText="Resell Value"
        typeI="number"
        iValue={residualValue}
        uValue={updateResidualValue}
      />

      <InputAndTooltip
        id="life"
        label="Usefull life of the product"
        placeholder="The life of the product in years"
        tooltipText="The number of years you are going to use the product for."
        typeI="number"
        iValue={life}
        uValue={updateLife}
      />
      <InputAndTooltip
        id="interest"
        label="Interest Rates"
        placeholder="Interest rates given by your bank"
        tooltipText="Opportunity Cost of the transaction"
        typeI="number"
        iValue={interest}
        uValue={updateinterest}
      />

      <InputAndTooltip
        id="discRate"
        label="Discounting Rates(Optional)"
        placeholder="Discounting rates given by central bank (optional)"
        tooltipText="Discounting Rate"
        typeI="number"
        iValue={discRate}
        uValue={updateDiscRate}
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

export default Bd;
