import React from 'react'
import './zomato.css'
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";




function zomato() {
    return (
        <div>

            <section className='first_section_main_div'>

                <div className='first_inner_div'>

                    <div className='nav_section_first'>

                        <div className='first_upper_leftside'>

                        </div>

                        <div className='first_upper_rightside'>

                            <p className='menus_first_section'>Investor Relations</p>
                            <p className='menus_first_section'>Add Restaurant</p>
                            <p className='menus_first_section'>login</p>
                            <p className='menus_first_section'>Sign up</p>

                        </div>

                    </div>

                    <div className='inner_content_section_first'>
                        <img className='first_section_zomato_logo' src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                        <p className='heading_first_section'>Discover the best food & drinks in Kochi</p>
                        <div className='input_section_first'>


                            <div className='select_location_wrapper'>
                                <FaLocationDot className='loction_icon_first' />
                                <select className='select_location_first_section'>
                                    <option>Fort Kochi,Kochi</option>
                                </select>

                            </div>

                            <div className='main_div_serchbar_first'>
                                <input type="text" className='search_bar_first_section' placeholder='Search for restaurant,cuisine or a dish' />
                                <CiSearch className='icon_search_first' />

                            </div>



                        </div>


                    </div>





                </div>

            </section>

            <section className='second_section_main_div'>

                <div className='second_section_main_inner_div'>


                    <div className='second_section_firstCard_div'>
                        <img className='second_section_fistcard_image' src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/6872/images/Oxrxpqa6SyOaHCeBWDed_slow_cooker_landscape.jpg" alt="" />

                        <div className='second_section_firstcard_heading'>Order Online</div>
                        <div className='second_section_firstcard_subheading'>Stay home and order to your doorstep</div>
                    </div>

                    <div className='second_section_firstCard_div'>
                        <img className='second_section_fistcard_image' src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/6872/images/Oxrxpqa6SyOaHCeBWDed_slow_cooker_landscape.jpg" alt="" />

                        <div className='second_section_firstcard_heading'>Order Online</div>
                        <div className='second_section_firstcard_subheading'>Stay home and order to your doorstep</div>
                    </div>

                </div>



            </section>

            <section className='third_section_main'>

                <div className='third_inner_div_main'>

                    <h1>collections</h1>
                    <div className='third_inner_subheading_full'>

                        <div className='left_side_subheading_third'>

                            <p className='subheading_left'>Explore curated lists of top restaurants, cafes, pubs, and bars in Trivandrum, based on trends</p>

                        </div>

                        <div className='right_side_subheading_third'>

                            <p className='right_side_heading'>All collections in Trivandrum
                                <IoMdArrowDropright />
                            </p>

                        </div>

                    </div>

                    <div className='card_section_third '>

                        <div className='onebyone_card cardonethird '>

                            <div className='main_div_cardcontent'>

                                <div className='content_card_third'>8 place for art lovers</div>
                                <div className='content_card_third'>7 places   <IoMdArrowDropright /></div>

                            </div>

                        </div>

                        <div className='onebyone_card cardtwothird'>

                            <div className='main_div_cardcontent '>

                                <div className='content_card_third'>Great Cafes</div>
                                <div className='content_card_third'>11 places   <IoMdArrowDropright /></div>

                            </div>

                        </div>

                        <div className='onebyone_card cardthreethird'>

                            <div className='main_div_cardcontent '>

                                <div className='content_card_third'>6 Places for Authentic Kuzhimandhi </div>
                                <div className='content_card_third'>5 places   <IoMdArrowDropright /></div>

                            </div>

                        </div>

                        <div className='onebyone_card cardfourthird'>

                            <div className='main_div_cardcontent '>

                                <div className='content_card_third'>5 Must-visit Legendary Places</div>
                                <div className='content_card_third'>5 places   <IoMdArrowDropright /></div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className='fourth-section-main'>

                <div className='forth-section-innerdiv'>
                    <h1 style={{ color: "rgb(56, 54, 54);", fontFamily: "Okra, Helvetica, sans-serif;" }}>Popular localities in and around Kochi</h1>

                    <div className='card-section-forth-main'>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(2, 2, 2)" }}>Kakkanad</h3>
                                <p>522 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(0, 0, 0)" }}>Edappally</h3>
                                <p>376 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(15, 14, 14)" }}>Fort Kochi</h3>
                                <p>142 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(3, 3, 3)" }}>Panampilly Nagar</h3>
                                <p>112 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(18, 17, 17)" }}>MG Road</h3>
                                <p>103 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(5, 5, 5)" }}>Kacheripady</h3>
                                <p>126 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(9, 9, 9)" }}>Palarivattom</h3>
                                <p>172 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth'>

                            <div className='left-side-forth-card'>

                                <h3 style={{ color: "rgb(11, 11, 11)" }}>Vyttila</h3>
                                <p>139 places</p>

                            </div>

                            <div className='right-side-forth-card'>

                                <MdKeyboardArrowRight className='icon-forth-card' />

                            </div>

                        </div>

                        <div className='onebyone-card-section-forth ninecard'>

                            <p style={{ fontSize: "20px" }}>See more <IoIosArrowDown /></p>

                        </div>

                    </div>

                </div>


            </section>


            <section className='fivth-section-main'>

                <div className='fivth-innerdiv-main'>

                    <div className='leftside-fifth-main'>

                        <img height={"400px"} width={"400px"} src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" />

                    </div>

                    <div className='rightside-fifth-main'>


                        <div className='rightside-inner-div'>
                            <h1>Get the Zomato app</h1>
                            <p>We will send you a link, open it on your phone to download the app</p>

                            <div className='main-div-radio-button'>
                                <input className='radio-button-fifth' type="radio" />
                                <div> Email</div>
                                <input className='radio-button-fifth' type="radio" />
                                <div>Phone</div>
                            </div>

                            <div className='main-input-fieldname'>
                                <input className='input-email-fifth' type="text" placeholder='Email' />
                                <button className='button-fifth'>Share App Link</button>
                            </div>

                            <p style={{ color: "rgba(0, 0, 0, 0.512)" }}>Download App From</p>

                            <div className='main-inputfield-image'>

                                <img className='image-fifth' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />

                                <img className='image-fifth' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />

                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section className='sixth-section-main'>

                <div className='inner-sixth-section'>

                    <h1>Explore options near me</h1>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Popular Cuisines Near Me</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                    <br />


                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Popular Restaurant Types Near me</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                    <br />

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Top Restaurant Chains</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                    <br />

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Cities We Deliver To</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </div>

            </section>

            <section className='footer-zomato'>

                <div className='innerdiv-footer'>

                    <div className='innerdiv-top-section-footer'>


                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />

                        <div>
                            <button className='button-footer' ><img className='flag-footer' height={"16px"} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png" alt="" />India <IoIosArrowDown /></button>

                            <button className='button-footer'><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>language-globe</title><path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.011-5.518-4.482-9.989-9.999-10h-0.001zM17.14 6.18h-3c-0.264-1.393-0.63-2.62-1.107-3.791l0.047 0.131c1.755 0.733 3.161 2.010 4.039 3.618l0.021 0.042zM18.1 10c-0.002 0.676-0.090 1.33-0.252 1.954l0.012-0.054h-3.44c0.059-0.57 0.092-1.231 0.092-1.9s-0.034-1.33-0.099-1.982l0.007 0.082h3.44c0.15 0.57 0.238 1.224 0.24 1.899v0.001zM1.9 10c0.002-0.676 0.090-1.33 0.252-1.954l-0.012 0.054h3.46c-0.059 0.57-0.092 1.231-0.092 1.9s0.034 1.33 0.099 1.982l-0.007-0.082h-3.46c-0.15-0.57-0.238-1.224-0.24-1.899v-0.001zM7.48 8.1h5.040c0.063 0.57 0.099 1.231 0.099 1.9s-0.036 1.33-0.107 1.981l0.007-0.081h-5.040c-0.063-0.57-0.099-1.231-0.099-1.9s0.036-1.33 0.107-1.981l-0.007 0.081zM10.76 1.9c0.603 1.228 1.106 2.657 1.436 4.152l0.024 0.128h-4.44c0.354-1.623 0.857-3.052 1.51-4.395l-0.050 0.115c0.24 0 0.5 0 0.76 0s0.48 0 0.76 0zM6.96 2.48c-0.445 1.051-0.825 2.291-1.079 3.576l-0.021 0.124h-3c0.899-1.65 2.305-2.927 4.007-3.64l0.053-0.020zM2.86 13.8h3c0.262 1.4 0.629 2.634 1.107 3.811l-0.047-0.131c-1.757-0.738-3.165-2.022-4.039-3.637l-0.021-0.043zM9.24 18.1c-0.605-1.234-1.108-2.67-1.437-4.172l-0.023-0.128h4.44c-0.352 1.63-0.855 3.066-1.51 4.415l0.050-0.115c-0.24 0-0.5 0-0.76 0s-0.48 0-0.76 0zM13.040 17.52c0.431-1.046 0.798-2.28 1.041-3.558l0.019-0.122h3.040c-0.902 1.642-2.308 2.912-4.006 3.62l-0.054 0.020z"></path></svg> English <IoIosArrowDown /></button>
                        </div>



                    </div>

                    <div className='main-footer-content'>

                        <div className='first-footer'>

                            <h5>About Zomato</h5>
                            <div> Who We Are</div>

                            <div>Blog</div>

                            <div> Work With Us</div>

                            <div> Investor Relations </div>

                            <div>   Report Fraud</div>

                            <div> Press Kit</div>

                            <div> Contact Us</div>



                        </div>

                        <div className='second-footer'>

                            <h5>About Zomato</h5>
                            <div> Who We Are</div>

                            <div>Blog</div>

                            <div> Work With Us</div>

                            <div> Investor Relations </div>

                            <div>   Report Fraud</div>

                            <div> Press Kit</div>

                            <div> Contact Us</div>

                        </div>

                        <div className='third-footer'>

                            <h5>About Zomato</h5>
                            <div> Who We Are</div>

                            <div>Blog</div>

                            <div> Work With Us</div>

                            <div> Investor Relations </div>

                            <div>   Report Fraud</div>

                            <div> Press Kit</div>

                            <div> Contact Us</div>

                        </div>

                        <div className='forth-footer'>

                            <h5>About Zomato</h5>
                            <div> Who We Are</div>

                            <div>Blog</div>

                            <div> Work With Us</div>

                            <div> Investor Relations </div>

                            <div>   Report Fraud</div>

                            <div> Press Kit</div>

                            <div> Contact Us</div>

                        </div>

                        <div className='fifth-footer'>

                            <h5>About Zomato</h5>
                            <div> Who We Are</div>

                            <div>Blog</div>

                            <div> Work With Us</div>

                            <div> Investor Relations </div>

                            <div>   Report Fraud</div>

                            <div> Press Kit</div>

                            <div> Contact Us</div>

                        </div>

                        <div className='first-footer'>

                            <h5>Social links</h5>
                            <div style={{ width: "80%", color: "black", fontSize: "17px", display: "flex", justifyContent: "space-between" }}>
                                <FaInstagram size={25} />
                                <FaLinkedin size={25} />
                                <FaYoutube size={30} />
                                <FaSquareXTwitter size={25} />
                                <FaFacebook size={25} />

                            </div>

                            <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                                <img height={"40px"} width={"125px"} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />

                            </div>

                            <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                                <img height={"40px"} width={"125px"} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                            </div>






                        </div>

                    </div>
                    
                    <hr />
                    <p style={{ fontSize: "14px", color: "black" }}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>

                </div>

            </section>


        </div>
    )
}

export default zomato