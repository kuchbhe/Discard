import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container'
import firebaseDb from "./firebase";
import './Viewfaqs.css'

function Getexchange(){
    var [exchange, setExObjects] = useState({})
    

    useEffect(() => {
        firebaseDb.child("Exchange").on("value", snapshot => {
            if (snapshot.val()!=null)
            setExObjects({
                ...snapshot.val()
            })
         })
    }, [])

    return (
        <Container>
       
            <table align = "center" className = "table table-borderless table-stripped">
                <thead className = "thead-light">
                    <tr>
                        <th>Exchange and Return Policy</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(exchange).map(id => {
                            return <tr>
                                <td>{exchange[id].policy}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
            </Container>


    ); 
}

export default Getexchange;