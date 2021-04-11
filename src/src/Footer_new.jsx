import React from "react";
import footer from "./Footer.css"
import {
    OverlayTrigger,
    Button,
    Popover,
    Form,
    Row,
    Col,
  } from "react-bootstrap";


function Footer() {
  
    return (
            
        <footer id="footer" class="footer-1">
         {/* help wala footer  */}
        <div class="footer-help">
        <div class="container">
        <div class="row">
            <div class="col" align="center">
            
            <div ><a href=""> <i class="za fa-user"> </i> </a><h5> About Us</h5> </div>
            
            </div>

            <div class="col" align="center">
            
            
            <div ><a href=""> <i class="za fa-question-circle "  > </i> </a><h5> FAQ's</h5> </div>
            
            </div>
            <div class="col" align="center">
            {/* Send message wali cheez */}
                         <OverlayTrigger
                        trigger="click"
                        key="top"
                        placement="top"
                        overlay={
                        <Popover id={`popover-positioned-top`}>
                         <Popover.Title as="h3">{`Kahanian Support `}</Popover.Title>
                        <Popover.Content>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Type your message " />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>



                        </Form>

                        </Popover.Content>
                        </Popover>
                        }
                        >
                        {/* <Button variant="secondary" >Popover on top</Button> */}
                        <div ><a > <i class="za fa-comments"> </i> </a><h5> Need Help?</h5> </div>
     
                         </OverlayTrigger>






            {/* <div ><a href=""> <i class="za fa-comments"> </i> </a><h5> Need Help?</h5> </div> */}
    
             </div>
        </div>
        </div>
        </div>
                {/* main walla footer  */}
        <div class="main-footer widgets-dark typo-light">
        <div class="container">
            <div class="row">

            <div class="col" align="center">
                <div class="widget no-box">
                    <h5 className="widget-title">Get in touch <span></span></h5>
                    <ul class="thumbnail-widget">
                        <li>
                        <div ><a > <i class="fa fa-envelope">    </i> </a><small> &nbsp; &nbsp; kahanian9@gmail.com</small> </div>	
                        </li>
                        <li>

                        <div ><a > <i class="fa fa-facebook"> </i> </a><small> &nbsp; &nbsp; &nbsp; kahanian.pk</small></div>	
                        </li>
                        <li>
                        <div ><a > <i class="fa fa-instagram"> </i> </a><small> &nbsp; &nbsp; kahanian.pk</small></div>	
                        </li>

                    </ul>
                    
                </div>
            </div>
            
            
                <div class="col" align="center">
                <div class="widget no-box">
                    <h5 class="widget-title">Customer Care<span></span></h5>
                    <ul class="thumbnail-widget">
                        <li>
                        <div ><a href="https://www.google.com.pk/?client=safari&channel=iphone_bm">Exchange Policy</a></div>	
                        </li>
                        <li>
                        <div ><a href="">FAQ's</a></div>	
                        </li>
                        <li>
                        <div ><a href="">About Us</a></div>	
                        </li>

                    </ul>
                </div>
                </div>

  

                
<br>
  </br>


            <div class="col" align="center">
            <div class="widget no-box">
                <h5 class="widget-title">Newsletter Signup<span></span></h5>
                <p>Subscribe to our Newsletter for Exclusive Updates.</p>
                
                <div class="emailfield">
                  <form>
                  
                    <input type="text" name="email" value="Email"/>
                    <input name="uri" type="hidden" value="arabiantheme"/>
                    <input name="loc" type="hidden" value="en_US"/>
                    <input class="submitbutton ripplelink" type="submit" value="Subscribe"/>
                   </form>
                </div>
                
            </div>

            </div>
                </div>
            </div>
            </div>
  
        <div class="footer-copyright">
        <div class="container">
            <div class="row">
            <div class="col-md-12 text-center">
                    <p>Copyrights © {new Date().getFullYear()} Kahanian. All rights reserved.</p>
             </div>
            </div>
        </div>
        </div>
        </footer>

    )
}

export default Footer;

