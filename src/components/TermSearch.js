import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import firebase from "../firebase";
import "aos/dist/aos.css";


const db = firebase.firestore();

const searchStyles = {
  control: () => ({
    backgroundColor: "white",
    borderRadius: 20,

    position: "relative",
    bottom: 50
  }),
  input: () => ({
    marginTop: 15,
    width: "20rem"
  }),

  dropdownIndicator: () => ({
    position: "absolute",
    right: 10,
    top: 20
  }),
  group: () => ({
    display: "none"
  }),
  noOptionsMessage: () => ({
    display: "none"
  })
};

class TermSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: []
    };
  }

  loadOptions = async inputValue => {
    inputValue = inputValue.toLowerCase().replace(/\W/g, "");
    return new Promise(resolve => {
      db.collection("Business")
        .orderBy("cat")
        .startAt(inputValue)
        .endAt(inputValue + "\uf8ff")
        .get()
        .then(docs => {
          if (!docs.empty) {
            let recommendedTags = [];
            docs.forEach(function(doc) {
              const tag = {
                value: doc.id,
                label:
                      doc.data().nameBusiness + " in " + doc.data().cat + " category...",
                
                
                link: doc.data().linkBusiness,
                des: doc.data().descriptBusiness,
                pic: doc.data().picBusiness,
                rate: doc.data().rating
              };
              recommendedTags.push(tag);
            });
            return resolve(recommendedTags);
          } else {
            return resolve([]);
          }
        });
    });
  };

  handleOnChange = tags => {
    this.setState({
      selectedTag: [tags]
    });
  };

  render() {
    return (
      <>
        <div style={styles.mainContainer}>
          <div style={styles.searchBar}>
            <AsyncSelect
              placeholder=""
              styles={searchStyles}
              loadOptions={this.loadOptions}
              onChange={this.handleOnChange}
            />

            {this.state.selectedTag.map(e => {
              return (
                <li 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 20,
                    listStyle: "none",
                    maxWidth: "30rem"
                  }}
                  key={e.value}
                >
                  <br />
                  <a href={e.link}>
                    <img
                      style={{ maxWidth: "10rem", borderRadius: 10 }}
                      src={e.pic}
                      alt=""
                    />
                  </a>
                  <a href={e.link}>
                    <p style={{ fontSize: 10 }}>{e.label}</p>
                  </a>
                  <p>{e.des}</p>
                </li>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  buttonContainer: {
    margin: "5%"
  },

  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  headerImage: {
    width: "20%"
  },
  searchBar: { zIndex: "1" }
};

export default TermSearch;
