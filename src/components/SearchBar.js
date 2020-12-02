import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import AsyncSelect from 'react-select/async';
import firebase from '../firebase';

// const SearchBar = () => {
//     return (
//         <>
//             {/* <input style={inputStyles.input}
//                 placeholder='Fine black alternatives' hey>
                
                
//             </input> */}
            
//             <InputGroup style={inputStyles.input} className="mb-3">
//     <FormControl style={{borderTopLeftRadius:20, borderBottomLeftRadius:20 }}
//       placeholder="Search a known brand => Get black alternatives"
//       aria-label="Find black alternatives"
//                     aria-describedby="basic-addon2"
                    
//     />
//     <InputGroup.Append>
//       <Button style={{borderBottomRightRadius: 20,borderTopRightRadius: 20 }} variant="outline-light">Search</Button>
//     </InputGroup.Append>
//   </InputGroup>
//             </>
//     )
// }

// const inputStyles = {
//     input: {
//         maxWidth: '50rem',
//         padding:'1rem',
//         borderBottomRightRadius: 20,
//         position: 'relative',
//         bottom: 130,
//         backgroundColor: 'transparent',
//         // border: '1px solid grey'
            
        
//     },
//     searchIcon: {
//         Color:'grey'
//     },
//     logo: {
//         margin:5,
  
//   fontFamily: 'Poiret One, cursive',
//   zIndex:1,
//       textAlign: 'center',
  
//     },
  
// }


// clearIndicator
// container
// control
// dropdownIndicator
// group
// groupHeading
// indicatorsContainer
// indicatorSeparator
// input
// loadingIndicator
// loadingMessage
// menu
// menuList
// menuPortal
// multiValue
// multiValueLabel
// multiValueRemove
// noOptionsMessage
// option
// placeholder

const db = firebase.firestore();

const searchStyles = {
    control: () => ({
        
        backgroundColor: 'white',
     borderRadius: 20,
       
        // minWidth:'auto',
        position: 'relative',
        bottom: 50,
       
     
       
       
        
    }),
    input: () => ({
        marginTop: 15,
        width: '20rem',
        
        
    }),
   
  
    dropdownIndicator: () => ({
        position: 'absolute',
        right: 10,
        top: 20,
        
    }),
    group: () => ({
        display:'none'
    }),
    noOptionsMessage: () => ({
        display:'none'
    }),
    
  
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTag: []
        }
    }

    loadOptions = async (inputValue) => {
        inputValue = inputValue.toLowerCase().replace(/\W/g, "");
        return new Promise((resolve => {
                db.collection('Business')
                    .orderBy('alternativeBusiness')
                    .startAt(inputValue)
                    .endAt(inputValue + "\uf8ff")
                    .get()
                    .then(docs => {
                        if (!docs.empty) {
                            let recommendedTags = []
                            docs.forEach(function (doc) {
                                const tag = {
                                    value: doc.id,
                                    label: doc.data().nameBusiness + ' instead of ' + doc.data().alternativeBusiness,
                                    link: doc.data().linkBusiness,
                                    des: doc.data().descriptBusiness,
                                    pic: doc.data().picBusiness,
                                    rate: doc.data().rating
                                    
                                   
                                }
                                recommendedTags.push(tag)
                            });
                            return resolve(recommendedTags)
                        } else {
                            return resolve([])
                        }
                    })

            })
        )
    }

    handleOnChange = (tags) => {
        this.setState({
            selectedTag: [tags]
        })
    }

    render() {
        return (
            <>
      
            <div style = {styles.mainContainer}>
             
                 
                
    <div style={styles.searchBar}>
                <AsyncSelect 
                placeholder=''
               styles={searchStyles}
                    loadOptions={this.loadOptions}
                    onChange={this.handleOnChange}
                />

                {
                    this.state.selectedTag.map(e => {
                        return (
                            <li style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 20,
                                listStyle: 'none',
                            maxWidth:'30rem'}} key={e.value}>
                                <br />
                                <img style={{maxWidth:'10rem',borderRadius:10}} src={ e.pic }/>
                                <a href = {e.link}>{e.label}</a>
                                <p>{e.des}</p>
                                {/* <p>rating: {e.rate}</p> */}
                                
                            </li>
                          
                        )
                    })
                }
            </div>
            </div>
        </>
        );
    }

}


const styles = {
    buttonContainer: {
        margin:'5%'
    },


mainContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    

},
headerImage: {
    width:'20%'
    },
searchBar: {zIndex: "1"}

}

export default SearchBar

