import React ,{useEffect}from "react";
import './footer.css'
import video from '../asset/video.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Footer = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <section className="footer">
            <div className="videoDiv">
            <video src={video} muted autoplay = 'true' loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                        <small>Keep In touch</small>
                        <h2>Tavel with us</h2>
                    </div>
                    <div data-aos='fade-up' className="inputDiv flex">
                        <input type='text' placeholder ='Enter Email Address' />
                        <button data-aos='fade-up' className="btn flex" type='submit'>
                        SEND <FiSend className='icon'/> 
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className='icon'/>Travel.
                            </a>
                        </div>
                        <div data-aos='fade-up' className="footerParagraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </div>
                        <div data-aos='fade-up' className="footerSocials flex">
                            <AiOutlineTwitter  className='icon'/>
                            <AiFillYoutube  className='icon'/>
                            <AiFillInstagram  className='icon'/>
                            <FaTripadvisor  className='icon'/>

                        </div>
                    </div>

                <div  className="footerLinks grid">
                    {/* group one */}
                    <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Services
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Insurance
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Agency
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Tourism
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Payment
                        </li>
                    </div>

                    {/* group two */}
                    <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Bookings
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Rentcars
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            HostleWorld
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Trivago
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            TripAd
                        </li>
                    </div>

                    {/* group three */}

                    <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            London
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            California
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Indonesia
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Europe
                        </li>
                        <li className="footerList felx">
                            <FiChevronRight className='icon'/>
                            Oceania
                        </li>
                    </div>

                </div>

                <div className="footerDiv flex">
                    <small>Best Travel website theme</small>
                    <small>COPYRIGHTS RESERVED - ISRATECH2022</small>
                </div>
                
            </div>
            </div>
        </section>

    )
}

export default Footer