import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

let db = firebase.firestore();

 const TestScreen = () => {
     const [testData, setTestData] = useState([])
     
     useEffect(() => {
         db.collection("siteAssets")
             .doc('wishlist')
             .get()
             .then(res => {
                 console.log(res);
                 setTestData(res.data().blkAlt)
                 console.log(testData);
             })
             .catch(err => console.log(err))
     }, [])

     return (<div>
         {testData.map(test => {
             return (
                 <div>
                     <p key={test.id}>{test}</p>
                 </div>
             )
    })}
</div>)


 }

 export default TestScreen
 