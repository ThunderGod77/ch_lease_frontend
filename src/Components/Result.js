import React from "react";
import { Alert } from "reactstrap";

const Result = ({ totalCost, totalLeaseCost, equipmentCost }) => {
  if (totalCost - totalLeaseCost > 0) {
    return (
      <div>
        <Alert color="danger">
          <em>Leasing</em> is more affordable than buying by{" "}
          {(totalCost - totalLeaseCost) / equipmentCost}% (
          {totalCost - totalLeaseCost} Rupees)
        </Alert>
      </div>
    );
  } else {
    return (
      <div>
        <Alert color="danger">
          <em>Buying</em> is more affordable than leasing by{" "}
          {(-totalCost + totalLeaseCost) / equipmentCost}% (
          {-totalCost + totalLeaseCost} Rupees)
        </Alert>
      </div>
    );
  }
};
export default Result;
