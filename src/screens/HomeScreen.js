import React from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import firebase from "../firebase";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import "../App.css";

const HomeScreen = () => {

  const db = firebase.firestore();

  const [showRes, setShowRes] = React.useState("none");
  const [showAltSearch, setShowAltSearch] = React.useState("block");
  const [showTermSearch, setShowTermSearch] = React.useState("none");
  const [showAltBtn, setShowAltBtn] = React.useState("none");
  const [showSearchBtn, setShowSearchBtn] = React.useState("block");

  React.useEffect(() => {
    db.collection("Business").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
})

  const Hit = ({ hit }) => (
    <a href={hit.link}>
      <img style={{width:40}} src={hit.picBusiness}/>
      <p style={{ color: "black" }}>{hit.name}</p>
     
     
     
      
    </a>
  );
  const searchClient = algoliasearch(
    
  );

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
        <div style={{ display: `${showAltSearch}` }}>
          <SearchBar />
        </div>
        <button
          onClick={() => {
            setShowAltSearch("block");
            setShowTermSearch("none");
            setShowAltBtn("none");
            setShowSearchBtn("block");
          }}
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            borderStyle: "none",
            outline: 0,
            display:`${showAltBtn}`
          }}
        >
          Search by Alternative
        </button>
        <button
          onClick={() => {
            setShowTermSearch("block");
            setShowAltSearch("none");
            setShowSearchBtn("none");
            setShowAltBtn("block");
          }}
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            borderStyle: "none",
            outline: 0,
            display:`${showSearchBtn}`
          }}
        >
          Search by Term
        </button>

        <div style={{ display: `${showTermSearch}` }}>
          <InstantSearch searchClient={searchClient} indexName="businesses">
            <SearchBox
              onChange={() => {
                setShowRes("block");
              }}
              onReset={() => {
                setShowRes("none");
              }}
              placeholder="search now"
            />
            <div style={{ display: `${showRes}` }}>
              <Hits hitComponent={Hit} />
            </div>
          </InstantSearch>
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
    // position:'absolute',
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
    // left:35,
    color: "black",
  },

  image: {
    minWidth: "320px",
    marginTop: 20,
    maxHeight: "26rem",
    borderRadius: 10,
    position: "relative",
    // left:35,
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
