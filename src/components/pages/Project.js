import React from 'react';
import ecommerce from "./images/E-Commerce.png"
import market from "./images/Market-Watch.png"
import weather from "./images/Weather Dashboard.png"
import readme from "./images/ReadMe Generator.png"
import energy from "./images/Energy Refined.png"
import network from "./images/social-network-api.png"
import github from "./images/github link.png"
import eye from "./images/eye.png"
import sani from "./images/sani-meal-app.png"

export default function Home() {
  return (
    <div>
      <br></br>
      <center><h2 style={{color: "#E4DFDA", marginBottom: "-3%"}}>Featured Project</h2></center>
      <div class="card">
    <img class="card-img-top" src={sani} alt="Sani mea App"></img>
    <div class="card-body">
    <h5 class="card-title" style={{textAlign: "center"}}>Sani Meal App</h5>
      <p class="card-text" style={{textAlign: "center"}}>On this Application, myself and my team have built a Food Planner App. The User can Sign Up and Login to where they can search for meals
      with a search bar and can be saved in their userpage.</p>
      <p class="card-text" style={{textAlign: "center"}}><small class="text-muted">Created 07/06/2022</small></p>
      <a href='https://github.com/hassanmahdi58/Sani-Meal-App'><img id="githubicon" class="card-img-top" src={github} alt="Sani Meal App Github"></img></a>
      <a href='https://sanimealapp.herokuapp.com/'><img id="githubicon" class="card-img-top" src={eye} alt="Sani Meal App Visual"></img></a>
    </div>
  </div>
  <center><h2 style={{color: "#E4DFDA", marginBottom: "-3%"}}>More Projects</h2></center>
      <div class="card-group">
  <div class="card">
    <img class="card-img-top" src={market} alt="Market Watch"></img>
    <div class="card-body">
      <h5 class="card-title">Market Watch</h5>
      <p class="card-text">An application designed for the user to look at Companies Current Price In Stock and related Company News! Users are able to search 
    up their company they like and a card with the information will come up. It is designed for users who are in the field of the Stock
    Market and would like some quick information or users who are new about this and want to start somewhere new with basic information
    about company stocks.</p>
      <p class="card-text"><small class="text-muted">Created 01/02/2022</small></p>
      <a href='https://github.com/arjunkhakh/Market-Watch'><img id="githubicon" class="card-img-top" src={github} alt="Market Watch Github"></img></a>
      <a href='https://github.com/arjunkhakh/Market-Watch'><img id="githubicon" class="card-img-top" src={eye} alt="Market Watch Visual"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={weather} alt="Weather Dashboard"></img>
    <div class="card-body">
      <h5 class="card-title">Weather Dashboard</h5>
      <p class="card-text">An application designed for the user to look at the weather in a chosen city. The user would be able to input the city they want
            and a weather dashboard will appear with the temperature, humidity, wind speed and UV Index. It would also give a 5 day forecast
            for the city also.</p>
      <p class="card-text"><small class="text-muted">Created 24/01/2022</small></p>
      <a href='https://github.com/arjunkhakh/Check-If-The-Weather-Is-Bright-or-Blight'><img id="githubicon" class="card-img-top" src={github} alt="Weather Dashboard Github"></img></a>
      <a href='https://arjunkhakh.github.io/Check-If-The-Weather-Is-Bright-or-Blight'><img id="githubicon" class="card-img-top" src={eye} alt="Weather Dashboard Visual"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={readme} alt="ReadMe Generator"></img>
    <div class="card-body">
      <h5 class="card-title">ReadMe Generator</h5>
      <p class="card-text">This Application is a ReadMe Generator. It creates a README File when the user prompts information into the command line. Each piece of information is put onto the right section of what they answered into the README file. 
            This is achieved by putting all the questions into the terminal and for the user to answer them which gets filled into the ReadMe.</p>
      <p class="card-text"><small class="text-muted">Created 25/02/2022</small></p>
      <a href='https://github.com/arjunkhakh/Creating-A-README-File-By-Arjun'><img id="githubicon" class="card-img-top" src={github} alt="ReadMe Github"></img></a>
    </div>
  </div>
</div> 

<div class="card-group">
  <div class="card">
    <img class="card-img-top" src={energy} alt="Energy Refined"></img>
    <div class="card-body">
      <h5 class="card-title">Energy Refined</h5>
      <p class="card-text">On This Application, I had built this with another team member (Contacts Are In the ReadMe for Details) and have built an application which the user can view Renewable Energy Products.
        Users can sign in and view the products and also Create and Delete Products for other users to view and use. 
        Users can use this application to view different kinds of products from many categories.</p>
      <p class="card-text"><small class="text-muted">Created 05/04/2022</small></p>
      <a href='https://github.com/arjunkhakh/Energy-Refined'><img id="githubicon" class="card-img-top" src={github} alt="Energy Refined Github"></img></a>
      <a href='https://energy-refined.herokuapp.com/'><img id="githubicon" class="card-img-top" src={eye} alt="Energy Refined Visual"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={ecommerce} alt="E-Commerce Back End"></img>
    <div class="card-body">
      <h5 class="card-title">E-Commerce Back End</h5>
      <p class="card-text">On This Application, I had created a Back-End E-Commerce API Application. For this application, The user can create,update,view or delete Categories, Products and Tags. 
        I had achieved this by using Insomnia and creating the routes. I put the routes into Insomnia which then I had made all requests to test and see if the API will respond to my input.</p>
      <p class="card-text"><small class="text-muted">Created 24/03/2022</small></p>
      <a href='https://github.com/arjunkhakh/Online-E-Commerce-For-The-Latest-TechnoLovers'><img id="githubicon" class="card-img-top" src={github} alt="E-Commerce Github"></img></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={network} alt="Social Network API"></img>
    <div class="card-body">
      <h5 class="card-title">Social Network API</h5>
      <p class="card-text">For this project, I have created a Social-Network API which can Create A User and a Thought while also having Friends to your User Array and Reactions to your Thoughts Array. In this API, you can create a User/Thought, Get All or One User/Thought, Delete Users/Thoughts and update Users/Thoughts.</p>
      <p class="card-text"><small class="text-muted">Created 03/05/2022</small></p>
      <a href='https://github.com/arjunkhakh/Social-Network-API-'><img id="githubicon" class="card-img-top" src={github} alt="social Network Github"></img></a>
    </div>
  </div>
</div> 
    </div>
  );
}
