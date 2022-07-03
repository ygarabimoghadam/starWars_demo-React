
import React, {useState, useEffect} from 'react';
import './App.css'
import Movie from "./component/MovieList/MovieList"
import ReactDOM from 'react-dom'
import Starships from "./component/StarshipsList/StarshipsList"

function ButtonStar(){
  const handleclick = () =>{
  const root = ReactDOM.createRoot(document.getElementById('root')); 

  root.render(<Greeting isLoggedIn={false} />);}

  
  return <div>
   <button className="button" onClick={handleclick}>Starships</button>
   </div>
}

function ButtonBack(){
  const handleclick = () =>{
  const root = ReactDOM.createRoot(document.getElementById('root')); 

  root.render(<Greeting isLoggedIn={true} />);}

  
  return <div>
   <button onClick={handleclick}>Back</button>
   </div>
}


function MyMovie(props){
let [titles, setTitle1] = useState(null)
let [id1, setId1] = useState(null)
let [release1, setR1] = useState(null)
let [title2, setTitle2] = useState(null)
let [id2, setId2] = useState(null)
let [release2, setR2] = useState(null)
let [title3, setTitle3] = useState(null)
let [id3, setId3] = useState(null)
let [release3, setR3] = useState(null)
let [title4, setTitle4] = useState(null)
let [id4, setId4] = useState(null)
let [release4, setR4] = useState(null)
let [title5, setTitle5] = useState(null)
let [id5, setId5] = useState(null)
let [release5, setR5] = useState(null)
let [title6, setTitle6] = useState(null)
let [id6, setId6] = useState(null)
let [release6, setR6] = useState(null)



  useEffect(() => {
    async function getD() {
       
      const response = await fetch("https://swapi.dev/api/films/1")
      const  json0 = await response.json()
      var parsed0 = JSON.stringify(json0)
      var userdata0 = JSON.parse(parsed0)
      setTitle1(userdata0["title"])
      setId1(userdata0["episode_id"])
      setR1(userdata0["release_date"])
    
      

      const response2 = await fetch("https://swapi.dev/api/films/2")
      const  json2 = await response2.json()
      var parsed2 = JSON.stringify(json2)
      var userdata2 = JSON.parse(parsed2)
      setTitle2(userdata2["title"])
      setId2(userdata2["episode_id"])
      setR2(userdata2["release_date"])

      const response3 = await fetch("https://swapi.dev/api/films/3")
      const  json3 = await response3.json()
      var parsed3 = JSON.stringify(json3)
      var userdata3 = JSON.parse(parsed3)
      setTitle3(userdata3["title"])
      setId3(userdata3["episode_id"])
      setR3(userdata3["release_date"])

      const response4 = await fetch("https://swapi.dev/api/films/4")
      const  json4 = await response4.json()
      var parsed4 = JSON.stringify(json4)
      var userdata4 = JSON.parse(parsed4)
      setTitle4(userdata4["title"])
      setId4(userdata4["episode_id"])
      setR4(userdata4["release_date"])

      const response5 = await fetch("https://swapi.dev/api/films/5")
      const  json5 = await response5.json()
      var parsed5 = JSON.stringify(json5)
      var userdata5 = JSON.parse(parsed5)
      setTitle5(userdata5["title"])
      setId5(userdata5["episode_id"])
      setR5(userdata5["release_date"])

      const response6 = await fetch("https://swapi.dev/api/films/6")
      const  json6 = await response6.json()
      var parsed6 = JSON.stringify(json6)
      var userdata6 = JSON.parse(parsed6)
      setTitle6(userdata6["title"])
      setId6(userdata6["episode_id"])
      setR6(userdata6["release_date"])
     }
  getD()
  },[])
   
return(<><div className="BackImage">
  <div className="container">
<div className="content-box">
  <div className="item">
  <Movie 
  text={titles}
  ></Movie>
  <div className="key">
 <Movie text={id1}></Movie>
 <Movie text={release1}></Movie>
 </div>
  <div>
<ButtonStar></ButtonStar>
</div>

<text > ───────────────────────────────────────────────────────────</text>
<Movie 
  text={title2}
  ></Movie>
  <div className="key">
 <Movie text={id2}></Movie>
 <Movie text={release2}></Movie>
 </div>
  <div >
<ButtonStar></ButtonStar>
</div>
<text > ───────────────────────────────────────────────────────────</text>
<Movie 
  text={title3}
  ></Movie>
  <div className="key">
 <Movie text={id3}></Movie>
 <Movie text={release3}></Movie>
 </div>
  <div>
<ButtonStar></ButtonStar>
</div>
<text > ───────────────────────────────────────────────────────────</text>
<Movie 
  text={title4}
  ></Movie>
  <div className="key">
 <Movie text={id4}></Movie>
 <Movie text={release4}></Movie>
 </div>
  <div >
<ButtonStar></ButtonStar>
</div>
<text > ───────────────────────────────────────────────────────────</text>
<Movie 
  text={title5}
  ></Movie>
  <div className="key">
 <Movie text={id5}></Movie>
 <Movie text={release5}></Movie>
 </div>
  <div >
<ButtonStar></ButtonStar>
</div>
<text > ───────────────────────────────────────────────────────────</text>
<Movie 
  text={title6}
  ></Movie>
  <div className="key">
 <Movie text={id6}></Movie>
 <Movie text={release6}></Movie>
 </div>
 <ButtonStar></ButtonStar>

<text > ───────────────────────────────────────────────────────────</text>

    </div>
    </div>
        </div>
      </div></>)
}

function Loading(props){
  const root = ReactDOM.createRoot(document.getElementById('root'))

  root.render(<Loading LoggedIn={true} />)
  const LoggedIn = props.LoggedIn;
  
  if (LoggedIn) {
    return(<><div className="BackImage">
  <div className="container">
<div className="content-box">
  isLoaading
</div>
</div>
      </div></>
      )}
      else{
        return <MyMovie/>;}
      }
  
function MyStarships(props){
let [name, setName] = useState(null)


  
useEffect(() => {
  async function getDa() {
  const response7 = await fetch("https://swapi.dev/api/films/2")
  const  json7 = await response7.json()
  var parsed7 = JSON.stringify(json7)
  var userdata7 = JSON.parse(parsed7)
  setName(userdata7["starships"])
  }

  getDa()
  
 

},[])
  

  return<><div className="BackImage">
    
  <div className="container">
<div className="content-box">
  <div className="backbutton">
          <ButtonBack>Back</ButtonBack>
        </div><div className="item1">
          
      
      <Starships name={ "https://swapi.dev/api/starships/3"} model=""></Starships>
      <Starships name={"https://swapi.dev/api/starships/10"} model=""></Starships>

           
          </div>
          <div className="content-boxStarships">
          <Starships model={"https://swapi.dev/api/starships/10"}></Starships>
          <Starships model={ "https://swapi.dev/api/starships/3"} ></Starships>
          
</div>
</div>
        </div>
      </div></>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <MyMovie />;
  }
  return <MyStarships/>;
}




function App() {
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(<Greeting isLoggedIn={true} />);

  return (
     <div className="backImage">
     {    
   Greeting()}
   </div>
);
}
export default App;
