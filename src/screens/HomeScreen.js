import React from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import { Button } from "react-bootstrap";
import TermSearch from "../components/TermSearch";

const HomeScreen = () => {
  const [showAltSearch, setShowAltSearch] = React.useState("flex");
  const [showTermSearch, setShowTermSearch] = React.useState("none");
  const [showAltBtn, setShowAltBtn] = React.useState("none");
  const [showSearchBtn, setShowSearchBtn] = React.useState("block");

  return (
    <>
      <div style={styles.mainContainer}>
        <p
          style={{
            color: "white",
            position: "absolute",
            fontFamily: "Poiret One, cursive",
            marginTop: 20,
          }}
        >
          Enter known brands. Find black alternatives
        </p>
        <div
          style={{
            display: `${showAltSearch}`,
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <SearchBar />
          <Button
            onClick={() => {
              setShowTermSearch("flex");
              setShowAltSearch("none");
              setShowSearchBtn("none");
              setShowAltBtn("flex");
            }}
            style={{
              backgroundColor: "#8637a6",
              color: "white",
              borderRadius: "5px",
              borderStyle: "none",
              outline: 0,
              display: `${showSearchBtn}`,
              fontFamily: "Poiret One, cursive",
            }}
          >
            Search by Term
          </Button>
        </div>

        <div
          style={{
            display: `${showTermSearch}`,
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <TermSearch />
          <Button
            onClick={() => {
              setShowTermSearch("none");
              setShowAltSearch("flex");
              setShowSearchBtn("flex");
              setShowAltBtn("none");
            }}
            style={{
              backgroundColor: "#8637a6",
              color: "white",
              borderRadius: "5px",
              borderStyle: "none",
              outline: 0,
              display: `${showAltBtn}`,
              fontFamily: "Poiret One, cursive",
            }}
          >
            Search by Alt
          </Button>
        </div>
      </div>
    </>
  );
};

const styles = {
  buttonContainer: {
    margin: "5%",
  },

  logo: {
    margin: 60,
    position: "absolute",
    fontFamily: "Poiret One, cursive",
    zIndex: 1,
    textAlign: "center",
  },

  searchBar: {
    position: "absolute",
    top: "15rem",
    color: "black",
    minWidth: "20rem",
    listStyle: "none",
    zIndex: 1,
  },

  listItemCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignSelf: "center",
    zIndex: 100,
    color: "black",
    background: "white",
    width: "auto",
    borderRadius: 20,
    position: "relative",
  },

  listItemCardLink: {
    marginTop: 20,
    position: "relative",
    color: "black",
  },

  image: {
    minWidth: "320px",
    marginTop: 20,
    maxHeight: "26rem",
    borderRadius: 10,
    position: "relative",
  },

  backgroundImage: {
    height: "auto",
    position: "absolute",
    opacity: ".7",
    width: "100vw",
    overFlow: "hidden",
  },

  backgroundImage2: {
    height: "auto",
    display: "none",
    position: "absolute",
    opacity: ".2",
    backgroundSize: "auto",
  },

  descript: {
    maxWidth: "500px",
    minWidth: "100px",

    position: "relative",
    textAlign: "right",
  },

  mainContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(-45deg, #923cb5 0%, #000000 54%)",
    height: "100vh",
    zIndex: 2,
  },

  mainCardFlexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    minWidth: 300,
    height: 500,
    padding: 0,
    margin: 30,
  },
  profileImage: {
    width: "75%",
  },

  headerImage: {
    width: "20%",
  },
};

export default HomeScreen;
