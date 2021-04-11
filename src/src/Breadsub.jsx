import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./Bread.css"

function Breadsub() {
    return (
        <Breadcrumb class="breadcrumb">
            <Breadcrumb.Item  href="#">Homepage</Breadcrumb.Item>  {/*Insert Link to Homepage*/}
            <Breadcrumb.Item  href="#">Adminpage</Breadcrumb.Item> {/*Insert Link to Adminpage*/}
            <Breadcrumb.Item  active>View Subscribers</Breadcrumb.Item>
        </Breadcrumb>
    );
}
export default Breadsub;