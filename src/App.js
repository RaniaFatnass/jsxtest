import React from 'react';
import image from './imageInSrc.jpg';
import video from './myVideo.mp4';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
     
     <React.Fragment style= {{border:'solid', height: '1px' , color: 'black',maxWidth:'100vw'}}>
 
       <h1 className="title red"> Your name here</h1> 

     <br/>

       <img src={image}/> 
       
       <br/>

      <img src="/imageInPublic.jpg"/> 

      </React.Fragment>  

  <>
   <video style={{width: 500, height:350 }} controls> 

    <source src={video} type="video/mp4"/>

    </video>
  </>

</div>
  );
}

export default App;
