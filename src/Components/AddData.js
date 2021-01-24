import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
  Jumbotron,
} from "reactstrap";
import classnames from "classnames";

import Pd from "./PersonalData";
import Bd from "./BusinessData";

const Example = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container fluid style={{ width: "80%" }}>
        <Jumbotron style={{ paddingTop: "15px" }}>
          <Nav tabs style={{ marginBottom: "15px" }}>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Personal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Business
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Pd />
            </TabPane>
            <TabPane tabId="2">
              <Bd />
            </TabPane>
          </TabContent>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Example;
