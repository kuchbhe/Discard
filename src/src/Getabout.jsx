import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container'
import firebaseDb from "./firebase";
import './Viewfaqs.css'

function Getabout(){
    var [about, setAboutObjects] = useState({})
    

    useEffect(() => {
        firebaseDb.child("About").on("value", snapshot => {
            if (snapshot.val()!=null)
            setAboutObjects({
                ...snapshot.val()
            })
         })
    }, [])

    return (
        <Container>
       
            <table align = "center" className = "table table-borderless table-stripped">
                <thead className = "thead-light">
                    <tr>
                        <th>About Us</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(about).map(id => {
                            return <tr>
                                <td>{about[id].description}</td>
                                
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </Container>


    ); 
}

export default Getabout;