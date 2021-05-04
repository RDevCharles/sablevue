import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { firestore } from "../firebase";
import "aos/dist/aos.css";

const NavMenu = () => {
  const [catResults, setCatResults] = React.useState([]);

  function getFbCategory(cat) {
    let catRes = [];

    const unsubscribe = () => {
      firestore
        .collection("Business")
        .where("cat", "==", cat)
        .get()
        .then(snapShot => {
          snapShot.forEach(doc => {
            catRes.push(doc.data());

            console.log(catRes);
          });

          setCatResults(catRes);
        });
    };

    unsubscribe();
  }
  return (
    <>
      <Router>
        <Switch>
          <Navbar
            style={{
              backgroundColor: "black",
              boxShadow: "0px 4px 5px #1f1f1f75"
            }}
            collapseOnSelect
            expand="lg"
            variant="dark"
          >
            <Navbar.Brand style={styles.logo} href="/">
              Sable Vue
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item
                onSelect={() => {
                  getFbCategory("clothing");
                }}
              >
                    Clothing
              </NavDropdown.Item>
              <NavDropdown.Item
                onSelect={() => {
                  getFbCategory("education");
                  console.log(catResults);
                }}
              >
                Education
              </NavDropdown.Item>
              <NavDropdown.Item
                onSelect={() => {
                  getFbCategory("financial");
                  console.log(catResults);
                }}
              >
                Financial
              </NavDropdown.Item>
             

              <NavDropdown.Item
                // href="#action/3.2"
                onSelect={() => {
                  getFbCategory("food");
                  console.log(catResults);
                }}
              >
                Food
              </NavDropdown.Item>
              <NavDropdown.Item
                onSelect={() => {
                  getFbCategory("health");
                }}
              >
                Health
              </NavDropdown.Item>
              <NavDropdown.Item
                onSelect={() => {
                  getFbCategory("jewelry");
                }}
              >
                Jewelry
              </NavDropdown.Item>
              <NavDropdown.Item
                onSelect={() => {
                  getFbCategory("tech");
                }}
              >
                Tech
              </NavDropdown.Item>
            </NavDropdown>
<Nav.Link href="/deals">Sign up for crazy deals</Nav.Link>
            <Nav.Link href="/submit">Submit</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/privacy">Privacy</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Switch>
      </Router>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignSelf: "center",
          zIndex: 100,
          position: "absolute",
          backgroundColor: "black",
          width: "100vw "
        }}
      >
        {catResults.map(cRes => {
          return (
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="0"
              href={cRes.linkBusiness}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 20,
                  listStyle: "none",
                  maxWidth: "auto",
                  margin: "1rem 1rem",

                  zIndex: 200
                }}
              >
                <img style={{ width: 230 }} src={cRes.picBusiness} alt="" />
                <p>{cRes.nameBusiness}</p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
const styles = {
  logo: {
    margin: 5,
    fontFamily: "Poiret One, cursive",
    zIndex: 1,
    textAlign: "center"
  }
};

export default NavMenu;
