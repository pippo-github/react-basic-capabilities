/* eslint-disable */

import React from "react";
import './css/About.css'
import TitleAndFooter from './ComponenteTitleAndFooter';
import BlocchiAbout from '../Dati/datiAbout'


/* 
google map e' diventato a pagamanto anche se offre $300 a chi utilizza il servizio come nuovo chilente PER ORA !!!
Qui ho deciso di utilizzare dei provider diverso come:

mapquest


richiede:
npm install google-maps-react@2.0.6 -- rimosso non mi piace l'idea che e' a pagamento!

abilitare Maps JavaScript API a questa url:

https://console.cloud.google.com/apis/library/maps-backend.googleapis.com?q=Google%20Maps%20JavaScript%20API&id=fd73ab50-9916-4cde-a0f6-dc8be0a0d425&project=windy-furnace-180806 


Google Maps API guide: https://developers.google.com/maps/documentation/javascript/get-api-key​
Find your latitude and logitude: http://www.latlong.net/
*/

class About extends React.Component {

  render() {  

    const my_style = {
      width: "100%",
      height: "500px",
      border: "#ffa solid 2px",
      margin: "44px 0",
      padding: "7px",
      borderRadius: "5px"
      }

    return (
      <div className='container'>
        <h1 style={{marginBottom: "77px"}}>About us page</h1>
        <p  className='mainParag m-0' >In this page you can have some information about us.</p>
        <p className='mainParag m-0'>We are located in in Sant'Angelo d'Ischia, Napoli Italy. </p>

        <div id="grigImg" className='mt-5' >

          {
            BlocchiAbout.map( (block, idx) =>{

              const {id, title, parag, imgUrl} = block
              if(idx % 2 === 0)
              return(
                <React.Fragment key={id}>
                <div><img src={imgUrl} className='mt-5' alt="" /></div>
                <div className='paragrafoImg mt-5'>
                <h3 className='mb-5'>
                  { title }
                </h3>

                  <p style={{maxWidth: "520px", textAlign: "center"}}>{ parag }</p>
                </div>
              </React.Fragment>                
              )

              
              if(idx % 2 !== 0)
              return(
                <React.Fragment key={id}>
                <div className='paragrafoImg mt-5'>

                <h3 className='mb-5'>
                  { title }
                </h3>

                {
                  <p style={{maxWidth: "520px"}}>{ parag }</p>
                }

                </div>
                <div><img src={imgUrl} className='mt-5' alt="" /></div>
              </React.Fragment>                
              )


            })
          }
            {/* <div><img src="https://cf.bstatic.com/xdata/images/district/1680x560/47163.webp?k=89f0f0b297ae5e8add4c02ed9538a05aeef41f573d73e4f1ef9182ad4829d3b0&o=" alt="" /></div>
            <div className='paragrafoImg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor natus fuga aliquam eum libero eaque quaerat cupiditate debitis sequi quos repellendus porro, ex quidem qui sapiente ipsa voluptates perspiciatis facilis.
            </div> */}

            {/* <div><img src="https://cf.bstatic.com/xdata/images/district/1680x560/47163.webp?k=89f0f0b297ae5e8add4c02ed9538a05aeef41f573d73e4f1ef9182ad4829d3b0&o=" alt="" /></div>
            <div className='paragrafoImg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor natus fuga aliquam eum libero eaque quaerat cupiditate debitis sequi quos repellendus porro, ex quidem qui sapiente ipsa voluptates perspiciatis facilis.
            </div> */}

        </div>

<div style={ my_style }>

    <iframe 
    height="100%" 
    width="100%" 
    border="0" 
    marginWidth="0" 
    marginHeight="0" 
    title="mappa" 
    src="https://www.mapquest.com/embed/near-40.71018238104457,13.914270401000977?center=40.709531765423854,13.912210464477539&zoom=14&maptype=map">     
    </iframe>

</div>


      </div>
    );
  }
}


export default About;