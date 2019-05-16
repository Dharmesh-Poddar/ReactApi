import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component
{

    state={images :[]};

 onSearchSubmit =async term=>{

     const response =await axios.get('https://api.unsplash.com/search/photos',{
          params:{ query:term},
          headers:{
              Authorization:
              'Client-ID 9d3e754c58805628182c82e308eb8f3a7a3f1a87ea58a5f286cb477d4c9c9f4f'
          }

      });

      this.setState({images: response.data.results});

   };


   render(){
    return(
   <div className="ui container" style={{marginTop:'10px'}}>
      
       
       <SearchBar onSubmit={this.onSearchSubmit} />
        Found :{this.state.images.length} images
       </div>
       
        );


    }
}

export default App;