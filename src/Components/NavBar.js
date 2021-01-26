import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Lease/Buy</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/addData" style={{ color: "#9B9EA1" }}>
                  Calculate
                </Link>{" "}
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a href="https://github.com/ThunderGod77">Github</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjat_Hx-rnuAhUSSX0KHSeIBKIQFjABegQICBAC&url=https%3A%2F%2Fexplore.leaseaccelerator.com%2Fwp-content%2Fuploads%2F2016%2F08%2FLease-versus-buy-equipment-finance-white-paper.pdf&usg=AOvVaw32H_nohp8zcfBu4vnGSFXi">
                    More Info
                  </a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <a href="https://leasequery.com/blog/lease-vs-buy-analysis-corporate-finance/">
                    Article Link
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <a href="https://github.com/ThunderGod77/ch_lease_frontend">
              Source Code
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
