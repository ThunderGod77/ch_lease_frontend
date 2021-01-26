import { Button } from "reactstrap";
import React, { useState } from "react";
import InputAndTooltip from "../InputAndTooltip";
import BDTable from "./BDTable";
import BDLeaseTable from "./BDLeaseTable";
import Result from "../Result";

const Bd = function (props) {
  const [productName, setProductName] = useState("");
  const [lease, setLease] = useState(0);
  const [equipmentCost, setEquipmentCost] = useState(0);
  const [residualValue, setResidualValue] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [life, setLife] = useState(0);
  const [interest, setInterest] = useState(0);
  const [discRate, setDiscRate] = useState(0);
  const [table, setTable] = useState(false);
  const [depreciationRate, setDepriciationRate] = useState(0);
  const [data, setdata] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [leaseData, setLeaseData] = useState([]);
  const [leaseTotalCost, setLeaseTotalCost] = useState(0);
  const showTable = () => {
    if (
      lease === "0" ||
      equipmentCost === "0" ||
      residualValue === "0" ||
      taxRate === "0" ||
      life === "0" ||
      interest === "0" ||
      depreciationRate === "0"
    ) {
      alert("Please fill all the fields");
      return;
    }
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
  const updateTaxrate = (e) => {
    setTaxRate(e.target.value);
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
  const updateDepriciationRate = (e) => {
    setDepriciationRate(e.target.value);
  };

  const opportunityCost = (year) => {
    const interestLost =
      +equipmentCost * (Math.pow(1 + +interest / 100, year) - 1);
    return interestLost;
  };
  const depreciationBenefit = (year) => {
    const depriciationCost =
      +equipmentCost * (1 - Math.pow(1 - +depreciationRate / 100, year));
    const taxBenefit = (+depriciationCost * +taxRate) / 100;
    return taxBenefit;
  };
  const leaseBenefit = (year) => {
    const taxBenefit = (+lease * +taxRate) / 100;
    return taxBenefit;
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
      const pTF = i === 1 ? opC + +equipmentCost : opC;
      const tBD =
        i === 1
          ? depreciationBenefit(i)
          : depreciationBenefit(i) - depreciationBenefit(i - 1);
      const postTF = pTF - tBD;
      const dR = discountingRate(i);
      const PVDR = dR * postTF;
      totalCostf += PVDR;
      result = result.concat([[year, opC, pTF, tBD, postTF, dR, PVDR]]);
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
      const postTF = leaseBenefit(i);
      const tf = ptf - postTF;
      const dR = discountingRate(i);
      const PVDR = dR * tf;
      totalCostf += PVDR;
      result = result.concat([[year, ptf, postTF, tf, dR, PVDR]]);
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
        tooltipText="The name of the product you are planning to acquire."
        typeI="text"
        iValue={productName}
        uValue={updateProducName}
      />
      <InputAndTooltip
        id="CostEquipment"
        label="Cost of the Equipment"
        placeholder="Please enter the cost of the product you need"
        tooltipText="The total Cost of the equipment you are planning to acquire."
        typeI="number"
        iValue={equipmentCost}
        uValue={updateEquipmentCost}
      />
      <InputAndTooltip
        id="Lease"
        label="Quarterly Lease of the quipment"
        placeholder="Please enter the Rental lease of the product per quarter"
        tooltipText="The quarterly amount to be paidfor the equipment."
        iValue={lease}
        uValue={updateLease}
        typeI="number"
      />
      <InputAndTooltip
        id="residualValue"
        label="Residual/Disposable value "
        placeholder="Please enter the residual/disposable value of the product"
        tooltipText="The value of the product after it's use is over. "
        typeI="number"
        iValue={residualValue}
        uValue={updateResidualValue}
      />
      <InputAndTooltip
        id="taxRate"
        label="Income Tax rate "
        placeholder="Please enter the corporate tax rate in your country."
        tooltipText="Corporate Income tax rate in your country."
        typeI="number"
        iValue={taxRate}
        uValue={updateTaxrate}
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
        id="depriciationRate"
        label="Depriciation Rate"
        placeholder="Depriciation rate of the equipment"
        tooltipText="The depriciation rate of the equipment you are planning to acquire."
        typeI="number"
        iValue={depreciationRate}
        uValue={updateDepriciationRate}
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
        {table && <BDTable data={data} totalCost={totalCost - residualValue} />}
      </div>
      <div style={{ overflowX: "scroll", marginTop: "25px" }}>
        <h3>On Lease</h3>
        {table && <BDLeaseTable data={leaseData} totalCost={leaseTotalCost} />}
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
