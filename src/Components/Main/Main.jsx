import React,{useEffect} from "react";
import './main.css'
import {BsClipboard2Check} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import img from '../asset/img1.jpeg'
import img2 from '../asset/img2.png'
import img3 from '../asset/img3.jpg'
import img4 from '../asset/img4.jpg'
import img5 from '../asset/img5.jpg'
import img6 from '../asset/img6.jpg'
import img7 from '../asset/img7.jpg'
import img8 from '../asset/img8.jpg'
import img9 from '../asset/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data =[
    {
        id:1,
        imgSrc:img,
        destTitle:'Purple Island',
        location:'Qatar',
        grade:'Relax',
        fees:'$800',
        description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
        

    },
    {
         id:2,
         imgSrc:img2,
         destTitle:'United Arab Emirates.',
         location:'Dubai',
         fees:'$800',
         description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
        

    },
    {
         id:3,
         imgSrc:img3,
         destTitle:'United Kingdom',
         location:'London',
         fees:'$800',
         description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
        

    },
    {
         id:4,
         imgSrc:img4,
         destTitle:'Indonesia',
         location:'Bali',
         fees:'$800',
         description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
        

     },
     {
         id:5,
         imgSrc:img5,
         destTitle:'Greece',
         location:'Crete',
         fees:'$800',
         description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
        

     },

    { 
        id:6,
        imgSrc:img6,
        destTitle:'Rome',
        location:'Italy',
        fees:'$800',
        description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
            
    },
    {
        id:7,
        imgSrc:img7,
        destTitle:'Cabo San Lucas',
        location:'Mexico',
        fees:'$800',
        description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',

    }, 
        
    {
        id:8,
        imgSrc:img8,
        destTitle:'Istanbul',
        location:'Turkey',
        fees:'$800',
        description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family.',
                    
    },        
    
    {
        id:9,
        imgSrc:img9,
        destTitle:' Hurghada',
        location:'Egypt',
        fees:'$800',
        description:'A serene island set amidst nature beyond Al Khor is the Purple Island abundant of mangroves and lush greenery. This island brings you an opportunity to reconnect with nature away from the hustle-bustle of the city. From long walks and family picnics to kayaking options, the Purple Island has something for everyone in the family',
                 
    },]

const Main = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Most visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* high order array method(map).
                .map array to fetch each destination at once  */}
                
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                        <div key ={id} data-aos='fade-up'
                            className="singleDestination">


                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle}/>
                            </div> 

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">{location}
                                    </span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                    <h5>{fees}</h5> 
                                    </div>
                               </div>

                               <div className="desc">
                               <p>{description}</p>
                               </div>
                               <button className="btn flex">
                                Details<BsClipboard2Check className='icon'/>
                               </button>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </section>
            
    )
}

export default Main