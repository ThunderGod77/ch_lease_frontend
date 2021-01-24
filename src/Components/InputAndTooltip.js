import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Tooltip,
} from "reactstrap";

const ToolInput = function (props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
  return (
    <>
      <InputGroup id={props.id} style={{ width: "60%" }}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText
            style={{ backgroundColor: "#343A40", color: "whitesmoke" }}
          >
            {props.label}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder={props.placeholder}
          type={props.typeI}
          value={props.iValue}
          onChange={props.uValue}
        />
      </InputGroup>

      <Tooltip
        placement="right"
        isOpen={tooltipOpen}
        target={props.id}
        toggle={toggleTooltip}
      >
        {props.tooltipText}
      </Tooltip>
      <br />
    </>
  );
};

export default ToolInput;
