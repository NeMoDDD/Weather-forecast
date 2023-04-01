
import './App.css'; 
import React, { useState } from 'react'; 


const api ={ 
  key: "ce79db3e936a800af7ff087f978b389f",
  base: 'https://api.openweathermap.org/data/2.5/'
} 
const sunny = document.querySelector('.app'); 

const dateBuilder = (d) =>{ 
  let months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек']; 
  let days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
 
  let day = days[d.getDay()]; 
  let date = d.getDate(); 
  let month = months[d.getMonth()]; 
  let year = d.getFullYear(); 
  return `${day} ${date} ${month} ${year}`
}
function App() { 


  const [query, setQuery]= useState(''); 
  const[weather, setWeather]= useState({}); 
  var not_found;
  const search = evt => { 
    if(evt.key === 'Enter'){ 
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) 
      .then(res => res.json()) 
      .then(result =>{ 
        setWeather(result);
        setQuery(''); 
        console.log(result)

        // if (result.message != "city not found") {
        //   document.getElementsByClassName("not-found")[0].style.display = 'none'
        //   document.getElementsByClassName("welcome")[0].style.display = 'block'
        // } else {
        //   document.getElementsByClassName("not-found")[0].style.display = 'block'
        //   document.getElementsByClassName("welcome")[0].style.display = 'none'
          
        // }
      });
    }
  }
  return ( 

    <div className={ 
      (typeof weather.main !='undefined') 
      ?((weather.main.temp > 10) 
      ? "app-warm"  
      : 'app-cold' ) 
      :'app' 
        }>
        <main> 
          <div className='search-box'> 
        <input type='text' className='search-bar'  
        placeholder='Search...'  
        onChange={e => setQuery(e.target.value)}  
        value={query}  
         onKeyDown= {search}
         >  
        </input> 
    
          </div> 

          <div className={(weather.message == "city not found")
           ? "not-found" 
           : "found"
            }> Not found </div>
          <div className={(weather.message == "city not found")
          ? "not-found2"
          : "found2"}>
          {(typeof weather.main !='undefined')?(
           <div className="info">  
            <div className='location-box'>
             <div className='location'>{weather.name},{weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
              </div>
          
          <div className='weather-box'> 
            <div className='temp'> 
             {Math.round(weather.main.temp)}°C
             </div> 
             <div className='weather'>{weather.weather[0].main}</div> 
          </div> 
          </div>  
        ): (<div className="welcome"> Добро пожаловать в приложение OpenWeather!</div>)}

          </div>
        </main>
    </div>

);
}

export default App;

