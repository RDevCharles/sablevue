import React, { useState, useEffect } from "react";
import firebase from "firebase";

const db = firebase.firestore();

const WishList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    db.collection("siteAssets")
      .doc("wishlist")
      .get()
      .then(res => {
        setCompanies(res.data().blkAlt);
      });
  }, []);

  return (
    <>
      <div style={wlStyles.wishListDiv}>
        <p
          style={wlStyles.wishlistP}
        >{`Everyday I do my best to try to find brands that stretch over a wide array of fields.
                This is a list of companies I'm having a hard time finding alternatives for. By no means am I saying that these companies don't exist... but if you could help ya boy out 🤷🏾‍♂️`}</p>

        <div style={wlStyles.wishListContainer}>
          {companies.map(company => {
            return (
              <div>
                <p>{company}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const wlStyles = {
  wishListContainer: {
    margin: "4rem 5rem 0rem 5rem",

    textAlign: "center"
  },
  wishlistP: {
    background: "linear-gradient(-45deg, #923cb5 0%, #000000 54%)",
    color: "white",
    borderRadius: "1rem",
    boxShadow: "2px 5px 6px 1px #888888",
    padding: "2rem",
    margin: "3rem",
    display: "flex"
  },
  wishListDiv: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default WishList;
