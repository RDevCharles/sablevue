// import React, {Component} from 'react';
// import AsyncSelect from 'react-select/async';
// import firebase from '../firebase';



const db = firebase.firestore();

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
                db.collection('tech')
                    .orderBy('descriptBusiness')
                    .startAt(inputValue)
                    .endAt(inputValue + "\uf8ff")
                    .get()
                    .then(docs => {
                        if (!docs.empty) {
                            let recommendedTags = []
                            docs.forEach(function (doc) {
                                const tag = {
                                    value: doc.id,
                                    label: doc.data().nameBusiness,
                                    link: doc.data().linkBusiness,
                                    des: doc.data().descriptBusiness
                                    
                                   
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
             
                {/* <h1 >Khangela</h1> */}

                
    <div style={styles.searchBar}>
                <AsyncSelect 
                placeholder='Search'
               
                    loadOptions={this.loadOptions}
                    onChange={this.handleOnChange}
                />
                <p>Results: </p>
                {
                    this.state.selectedTag.map(e => {
                        return (
                            <li key={e.value}>
                                
                                <br/>
                                <a href = {e.link}>{e.label}</a>
                                <p>{e.des}</p>
                                
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

searchBar: {
    marginBottom:20,
  
    
//    top:'1em',
   
    width: '40%',
    // position:'absolute',
    listStyle:'none'
    
},
mainContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

},
headerImage: {
    width:'20%'
}

}


// export default SearchBar



// //react external links