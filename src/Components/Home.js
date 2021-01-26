import React from "react";
import { Container, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

const Main = function (props) {
  return (
    <Container fluid style={{ width: "80%" }}>
      <Jumbotron style={{ paddingTop: "15px" }}>
        <div style={{ marginLeft: "5%" }}>
          <h1 style={{ fontSize: "5em" }}>Lease vs Buy</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, modi
            sint. Aliquam repellendus at perspiciatis nobis, delectus, ratione
            fugit hic quos provident ab voluptate debitis unde minus saepe
            consequatur dolore ad, eos harum excepturi soluta veritatis
            inventore cum! Qui repellendus sequi quaerat repudiandae ipsum
            quisquam obcaecati necessitatibus, numquam beatae esse similique
            dolore cum! Amet, vero officia recusandae minima beatae corporis
            similique tenetur nostrum aspernatur quisquam blanditiis. Sed eos,
            at esse aut sint hic fugiat illo nostrum nihil quae aspernatur rem
            totam ullam magnam architecto soluta rerum eius dignissimos minima
            necessitatibus consequuntur provident quia corrupti. Sequi adipisci
            in earum iure dolore.
          </h3>
          <iframe
            title="Tutorial"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pllC4zICni4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 style={{ marginTop: "15px", fontSize: "1.4em" }}>
            You can do it automatically with <Link to="/addData">LeaseBuy</Link>
          </h5>
          <p style={{ fontSize: "1.2em" }}>
            It automatically creates a financial table and calculates if it is
            better to lease/buy equipment for businesses,items for personal use
            or home.So you do not have to dabble in creating complex excel
            sheets and waste your time.
          </p>
        </div>
      </Jumbotron>
    </Container>
  );
};

export default Main;
