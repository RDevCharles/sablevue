import React from "react";

const PrivacyScreen = () => {
  return (
    <div>
      <div style={styles.privacyDiv}>
        <h1>Privacy Policy of Sable Vue/ Whatslegal</h1>
        <p>
          Rondell Charles operates the WhatsLegal App and Sable Vue website,
          which provides the SERVICE. This page is used to inform visitors
          regarding our policies with the collection, use, and disclosure of
          Personal Information if anyone decided to use our Service, the
          Whatslegal website. If you choose to use our Service, we do not
          collect or use your information or data. Information Collection and
          Use For a better experience while using our Service, we may require
          you to provide us with certain personally identifiable information,
          including but not limited to your name, phone number, and postal
          address. The information that we collect will be used to contact or
          identify you. Log Data We want to inform you that whenever you visit
          our Service, we don not collect information that your browser sends to
          us that is called Log Data. We may employ third-party companies and
          individuals due to the following reasons: To facilitate our Service;
          To provide the Service on our behalf; To perform Service-related
          services; or To assist us in analyzing how our Service is used. We
          want to inform our Service users that these third parties have access
          to your Personal Information. The reason is to perform the tasks
          assigned to them on our behalf. However, they are obligated not to
          disclose or use the information for any other purpose. Links to Other
          Sites Our Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over, and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services. Children's Privacy
          Our Services do not address anyone under the age of 13. We do not
          knowingly collect personal identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do necessary actions. Changes to This Privacy
          Policy We may update our Privacy Policy from time to time. Thus, we
          advise you to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately, after they are posted
          on this page. Contact Us If you have any questions or suggestions
          about our Privacy Policy, do not hesitate to contact us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyScreen;
const styles = {
  listItem: {
    marginTop: "1em",
    width: "40vw",
    backgroundColor: "#f0f0f0",
    borderRadius: 10
  },

  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  privacyDiv: {
    padding: "5rem",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    lineHeight: "2",
    backgroundColor: "whitesmoke ",
    position: "absolute",
    height: "100vh",
    overFlow: "hidden"
  }
};
