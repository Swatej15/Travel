import React, {useEffect} from "react";
import './home.css'
import video from '../asset/video2.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () =>{ 

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="home">
            <div className="overlay">
            </div>
            <video src={video} muted autoplay = 'true' loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos='fade-up' className="smallText">
                        Our packages
                    </span>
                    <h1 data-aos='fade-up' className="homeTittle">
                        search your holiday 
                    </h1>
                </div>

                <div data-aos='fade-up' className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">
                            search your destination:
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here" />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date"> Select your date </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex"> 
                        <label htmlFor="price">Max price:</label>
                        <h3 className="total">$5000 </h3>
                        </div>
                        <div className="input flex">
                        <input type ="range" max="5000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon"/>    
                        <span>More Filter</span>
                    </div> 
                </div>

                <div data-aos='fade-up' className='homeFooterIcons'>
                    <div className="rightIcons">
                    <FiFacebook className="icon"/>
                    <AiOutlineInstagram className="icon"/>
                    <FaTripadvisor className="icon"/> 
                    </div>

                    <div className="leftIcons">
                    <TbApps className ="icon"/>
                    <AiOutlineUnorderedList className ="icon"/>
                    
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Home