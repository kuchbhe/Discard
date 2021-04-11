import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import firebaseDb from "./firebase";
import Populateexc from "./test2";
import Header from "./Header";
import Footer from "./Footer";
import './Viewfaqs.css';
import './Bread.css';

//REFERENCE USED: https://www.youtube.com/watch?v=pI4438IHBYY&t=690s

//THIS PAGE ALLOWS THE ADMIN TO UPDATE THE EXCHANGE POLICY

function Updateexchange(){
    var [exchange, setEObjects] = useState({});
    var [currentId, setCurrentId] = useState(''); 
    
    useEffect(() => {
        firebaseDb.child('Exchange').on('value', snapshot => {
            if (snapshot.val() != null) {
                setEObjects({
                    ...snapshot.val()
                });
            }
        })
    }, []);

    async function addOrEdit(obj){
        if (currentId == '')
            firebaseDb.child('Exchange').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else {
            firebaseDb.child(`Exchange/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    };

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`Exchange/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }


    return (
        <Container>
        <Header/>
        <Breadcrumb class="breadcrumb">
            <Breadcrumb.Item  href="/">Homepage</Breadcrumb.Item>  {/*Insert Link to Homepage*/}
            <Breadcrumb.Item  href="/adminpage">Adminpage</Breadcrumb.Item> {/*Insert Link to Adminpage*/}
            <Breadcrumb.Item  href="/UpdateInformation">Update Information</Breadcrumb.Item> {/*Insert Link to Adminpage*/}
            <Breadcrumb.Item  active>Exchange Policy</Breadcrumb.Item>
        </Breadcrumb> 
        <div className = "row">
            <div className = "col-md-5">
                <Populateexc {...({ currentId, exchange, addOrEdit })}> </Populateexc>
            </div>
            <div className = "col-md-7">

            <table align = "center" className = "table table-borderless table-stripped">
                <thead className = "thead-light">
                    <tr>
                        <th>Exchange & Return Policy</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(exchange).map(key => {
                            return <tr key={key}>
                                <td>{exchange[key].policy}</td>
                            
                                <td>
                                    <a className = "btn text-primary" onClick={() => { setCurrentId(key) }}>  
                                        <i className = "fas fa-pencil-alt"></i>
                                    </a>
                                    <a className = "btn text-danger" onClick={() => { onDelete(key) }}>
                                        <i className = "fas fa-trash-alt"></i>
                                    </a>
                                </td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>

            </div>
        </div>

            <Footer/>
            </Container>


    ); 
}

export default Updateexchange;














// import React, {useState, useEffect, useRef} from "react";
// import {Form,Container, Breadcrumb} from "react-bootstrap";
// import firebaseDb from "./firebase";
// import Header from "./Header";
// import Footer from "./Footer";

// function Pushexchange(){

// const excRef = useRef();

// const handleSubmit = e => {
//     e.preventDefault();
//     var field = {
//         policy: excRef.current.value
//     }
//     firebaseDb.child('Exchange').push(field) 
//     window.location.reload();
// }
  
// return (

    
//     <React.Fragment>
    
//     <Header />
//     <Breadcrumb class="breadcrumb">
//             <Breadcrumb.Item  href="#">Homepage</Breadcrumb.Item>  {/*Insert Link to Homepage*/}
//             <Breadcrumb.Item  href="#">Adminpage</Breadcrumb.Item> {/*Insert Link to Adminpage*/}
//             <Breadcrumb.Item  href="#">Update Information</Breadcrumb.Item> {/*Insert Link to Adminpage*/}
//             <Breadcrumb.Item  active>Update Exchange Policy</Breadcrumb.Item>
//     </Breadcrumb>
    
//     <div class="col" align="center">
//     <Form onSubmit = {handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//              <Form.Label>Enter Exchange and Return Policy</Form.Label>
//              <Form.Control type="text" placeholder="Policy" required 
//              ref = {excRef}/>
//              <Form.Text className="text-muted"></Form.Text>
//         </Form.Group>
//         <input name="uri" type="hidden" value="arabiantheme"/>
//         <input name="loc" type="hidden" value="en_US"/>
//         <input class="submitbutton ripplelink" type="submit" value="Submit"/>
//  </Form>
//  </div>

 
//  <Footer/>
// </React.Fragment>
// );
// }

// export default Pushexchange;