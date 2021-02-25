import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data,setData]=useState([])

  useEffect(() => {
    if(!data[0]){
      axios.get('https://restcountries.eu/rest/v2/all')
      .then(res=>{
        setData(res.data)
      })
     
    }
  })
  
  return (
    <div className="App">
    
      {data && data.map(e=>{
        return (<div className="container">
          <container className="contain">
          <img src={e.flag} className='imagen'/>
          <h1 className='titulo'>{e.name} </h1>
          </container>
          <container className="body_contain">
          <h3 className='subtitulo'>{e.region}</h3>
          <h3 className='subtitulo'>{e.subregion}</h3>
          </container>
        </div>
        )
      })}
    </div>
  );
}

export default App;
