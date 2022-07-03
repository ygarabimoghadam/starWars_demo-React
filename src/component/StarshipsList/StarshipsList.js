import React, {useState, useEffect} from 'react';
import StarshipsInfo from "./StarshipsInfo"

function Starships({name,model}){
   let  [names, setNames] = useState(null)

   const doubled = name
    
    useEffect(() => {
    async function getData() {
       
       const response = await fetch(doubled)
       const  json0 = await response.json()
       var parsed0 = JSON.stringify(json0)
       var userdata0 = JSON.parse(parsed0)
       setNames(userdata0["name"])
      }
   getData()
   },[])
   
return <div>
         <span>{names}</span>
      <StarshipsInfo model = {model}></StarshipsInfo>
   </div>
    }
export default Starships


