import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container'
import firebaseDb from "./firebase";
import './Viewfaqs.css'

function Getfaqs(){
    var [faqs, setFaqObjects] = useState({})
    

    useEffect(() => {
        firebaseDb.child("FAQs").on("value", snapshot => {
            if (snapshot.val()!=null)
            setFaqObjects({
                ...snapshot.val()
            })
         })
    }, [])

    return (
        <Container>
       
            <table align = "center" className = "table table-borderless table-stripped">
                <thead className = "thead-light">
                    <tr>
                        <th>Questions</th>
                        <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(faqs).map(id => {
                            return <tr>
                                <td>{faqs[id].question}</td>
                                <td>{faqs[id].answer}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </Container>


    ); 
}

export default Getfaqs;