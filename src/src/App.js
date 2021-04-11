import Adminpage from "./adminpage"; //Admin Main Page 
import Managecollection from "./Managecollection";  // Manage Collection Page 
import Updateinfo from "./UpdateInformation"; //Update Information 
import Queries from "./Viewqueries"; //View Queries -> Retrieved from Database
import Subs from "./Viewsubs"; //View Subscribers -> Retrieved from Database 
import Updatefaqs from "./Updatefaqs"; //Update the FAQS -> Add/Edit/Delete 
import Updateexchange from "./Updateexchange"; 
import Updateabout from "./Updateabout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//NOTE: UPDATING FAQ, EXCHANGE, AND ABOUT US MAKE USE OF FILES test, test2 and test3.jsx respectively. 

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "adminpage" componenet = {Adminpage}/> {/* This should be replaced with the client homepage */}
          <Route path = "/adminpage" component = {Adminpage} /> 
          <Route path = "/managecollections" component = {Managecollection}/>
          <Route path = "/viewqueries" component = {Queries}/>
          <Route path = "/viewsubs" component = {Subs}/>
          <Route path = "/updateinformation" component = {Updateinfo}/>
          <Route path = "/updatefaqs" component = {Updatefaqs}/>
          <Route path = "/updateexchange" component = {Updateexchange}/>
          <Route path = "/updateabout" component = {Updateabout}/>
        </Switch>
      </Router>
    </div> 
  )  
}

export default App;
