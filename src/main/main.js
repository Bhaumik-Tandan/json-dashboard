import React,{useState} from 'react';

function Main(p) {
    const [firstLevel,setFirstLevel] = useState(Object.keys(p.data)[0])
    const [secondLevel,setSecondLevel] = useState()
        return (
        <div>
            <div id="top">
            {Object.keys(p.data).map((item, index) => {
                return <button onClick={()=>setFirstLevel(item)} key={index}>{item}</button>
            })}
            </div>
            <br/>
            <div id="side">
                {Object.keys(p.data[firstLevel]).map((item, index) => {
                    return <><button onClick={()=>setSecondLevel(item)} key={index}>{item}</button><br/></>
                    })}
          </div>

          <div>
              {JSON.stringify(p.data[firstLevel][secondLevel])}
          </div>
        </div>
    )
}

export default Main;
