import React from "react";

const DealsScreen = () => {
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
        <div >
          <div style={styles.submitDescript}>
            <h4 style={styles.submitDescriptP}>
              Sign up to be added to the Sable Vue mailing list. We'll be sending you deals from your favorite brands.
            </h4>
          </div>
        </div>
      </div>

      <form name="contact" method="post" style={styles.form}>
        <input type="hidden" name="form-name" value="contact"></input>
        <label style={styles.label}>Your name</label>
        <input style={styles.formInput} type="text" name="name"></input>
        <label style={styles.label}>Your email</label>
              <input style={styles.formInput} type="text" name="email"></input>
              <div>
             <label style={styles.label}>Select the categories you would like us to contact you about</label>
             <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}><label style={styles.label}>Clothing</label>
                  <input style={{marginLeft: 10}} type="checkbox" id="clothing" name="clothing" value="clothing"></input></div>
                  
                  <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}> <label style={styles.label}>Education</label>
                  <input style={{marginLeft: 10}} type="checkbox" id="education" name="education" value="education"></input></div>
                  
                  <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}> <label style={styles.label}>Financial</label>

                  <input style={{marginLeft: 10}} type="checkbox" id="financial" name="financial" value="financial"></input></div>
                  
                  <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}><label style={styles.label}>Food</label>
                  <input style={{marginLeft: 10}} type="checkbox" id="food" name="food" value="food"></input></div>
                  
                  <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}> <label style={styles.label}>Health</label>
                  <input style={{marginLeft: 10}} type="checkbox" id="health" name="health" value="health"></input></div>
                  
                  <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}><label style={styles.label}>Jewelry</label>
                  <input style={{marginLeft: 10}} type="checkbox" id="jewelry" name="jewelry" value="jewelry"></input></div>
                  
                  <div style={{display:'flex', flexDirection:'row', alignItems: 'baseline'}}> <label style={styles.label}>Tech</label>
                  <input style={{marginLeft: 10}} type="checkbox" id="tech" name="tech" value="tech"></input>
                  </div>
                  </div>
       
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

export default DealsScreen;
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
