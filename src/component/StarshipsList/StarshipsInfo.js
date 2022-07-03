import React, {useState, useEffect} from 'react';

function StarshipsInfo(props){
    let  [names, setNames] = useState(null)

    const doubled = props.model
     
     useEffect(() => {
     async function getData() {
        
        const response = await fetch(doubled)
        const  json0 = await response.json()
        var parsed0 = JSON.stringify(json0)
        var userdata0 = JSON.parse(parsed0)
        setNames(userdata0["model"])
        }
    getData()
    },[])

return <div>
          <p1>{names}</p1>
          </div>
}
export default StarshipsInfo