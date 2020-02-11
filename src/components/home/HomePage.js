import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () =>(
    <div className="jumbotron">
     <h1>Welcome to Course Page </h1>
     <p> We are going to learn react/redux and jsx</p>
         <Link to={"about"} className = "btn btn-primary btn-lg">
              Learn More...
         </Link>
     </div>
);

export default HomePage;