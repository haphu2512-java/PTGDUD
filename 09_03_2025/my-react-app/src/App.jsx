import { useState,useEffect } from 'react'
import './App.css'
import myImage from './assets/Annotation.png'
import chefify from './assets/chefify.png'
import avatar from './assets/avatar.png'
import check from './assets/check.png'
import nothing from './assets/nothing.png'
import RenderItem from './components/RenderComponent';
import RenderItem2 from './components/RenderComponent2'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  var [array2,setArray2] = useState([])
  var array = ['What to cook','Recipes','Ingredients','Occasions','About Us']

  useEffect(() => {
    var fn = fetch('https://67e811f620e3af747c40608b.mockapi.io/helloWorld')
              .then((r)=>r.json())
              .then((d)=>{
                  setArray2(d);
                  
              });
  }, []);

  


  return (
    <>
    <div className="container">
        <div className="header">
          
          <div className="leftH">
              <img src={chefify} alt="logo" />
              <input style={{height:'60%',
                              marginTop:'10px'
              }} type="text" />
          </div>

          <div className="rightH">

            <div className='linkH'>
            <ul>
              {<RenderItem array ={array}/>}              
            </ul>

            </div>

            <div className='btnH'> 
              <div className='btn'>
                <img src={check} alt="" />
                <input type="button" value="Your Recipe Box" />
              </div>
              <div>
                <img src={avatar} alt="" />
              </div>

            </div>
             
          </div>
        </div>
        
        <div className="body">
          <div className='bodyTren'>
            <h2>Emma Gonzalez's Recipe Box</h2>
            <img src={avatar} alt="" />
            <div>
              <p>
              Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.Emma Gonzalez is a deputy editor at Cherify.
              </p>
              <button>Share</button>
              
            </div>
            
          </div>
          <div className='bodyDuoi container-fluid mt-5'>
            <ul className='row justify-content-center'>
            {<RenderItem2 array ={array2}/>} 
            </ul>
          
            
          </div>


        </div>

        <div className="footer">
          <div className='leftF'>
            <h4>About Us</h4> 
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className=''>
              <input placeholder='Enter your email' type="text" />
              <button>Send</button>
            </div>
          </div>
          <div className='rightF'> 
              <div className='learn'>
                
                <ul className='learnTop'>
                  <li><h4>Learn More</h4></li>
                  <li>Our Cooks</li>
                  <li>See Our Feature</li>
                  <li>FAQ</li>
                </ul>
                <ul className='learnBot'>
                  <li><h4>Shop</h4></li>
                  <li>Gift Subcription</li>
                  <li>Send Us Feedback</li>                 
                </ul>
              </div>
              <div className="recipes">
                  <ul>
                    <li><h4>Recipes</h4></li>
                    <li>What to cook this week</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Christmas</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
