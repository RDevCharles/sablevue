import React from "react";

const SubmitScreen = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke ",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <div style={styles.mainSubmitDiv}>
        <div style={styles.mainFormDiv}>
          <div style={styles.submitDescript}>
            <h4 style={styles.submitDescriptP}>
              We need innovative companies expanding into new territory. If you
              know of or own a business you think should be added to this search
              engine please shoot me an email.
            </h4>
          </div>
        </div>
      </div>

      <form name="contact" method="post" style={styles.form}>
        <input type="hidden" name="form-name" value="contact" />
        <label style={styles.label}>Your name</label>
        <input style={styles.formInput} type="text" name="name"></input>
        <label style={styles.label}>Name of business</label>
        <input style={styles.formInput} type="text" name="businessname"></input>
        <label style={styles.label}>Your relationship to the business</label>
        <input style={styles.formInput} type="text" name="relationship"></input>
        <label style={styles.label}>A brief description of the business</label>
        <input style={styles.formInput} type="text" name="description"></input>
        <button
          type="submit"
          style={{
            display: "flex",

            width: "90px",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "black",
            marginTop: "4rem",

            borderColor: "black"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitScreen;
const styles = {
  mainSubmitDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "whitesmoke ",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    margin: "0rem 10rem 2rem  10%",
    textAlign: "left"
  },
  mainFormDiv: {
    width: "50%",
    backgroundColor: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0rem 0rem 5rem  0rem"
  },

  formInput: {
    width: "20rem",
    height: "3rem",
    marginTop: "1rem",
    border: "2px solid",
    borderColor: "light-grey",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    backgroundColor: "transparent",
    outline: "none"
  },
  label: {
    marginTop: "1.5rem ",
    fontWeight: "bold"
  },

  submitDescript: {
    color: "white",
    width: "80vw",
    marginTop: "2rem",
    borderRadius: "2rem"
  },
  submitDescriptP: {
    
    color: "black",
    borderRadius: "1rem",
    boxShadow: "2px 5px 6px 1px #888888",
    padding: "4rem"
  }
};
