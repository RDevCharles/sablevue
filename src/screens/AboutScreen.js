import React from "react";

const AboutScreen = () =>{

    return (
        <div>
        <div style={styles.aboutDiv}>
        <p>I believe that to effect real social change we must invest in our own ventures.
A strategic purge of our consumer dollars from the current market, combined with a conscious effort to only purchases goods and services from the people most disenfranchised by this nation
is the only thing that will create an antithesis to the system that functions to oppress us.
</p>
             
            </div>
            </div>
    )
}

export default AboutScreen
const styles = {
    listItem: {
        marginTop:'1em',
        width:'40vw',
        backgroundColor:'#f0f0f0',
        borderRadius: 10,
    
    },

mainContainer:{
    
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    
    },
    aboutDiv: {
        padding: '5rem',
        borderRadius: '5px',
        display: 'flex',
        flexDirection:'column',
        textAlign: 'center',
        lineHeight: '2',
        backgroundColor: 'whitesmoke ',
        position: 'absolute',
        height: '100vh',
        overFlow:'hidden'
        
}
    
}