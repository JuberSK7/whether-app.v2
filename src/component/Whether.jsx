import React,{useState, useEffect} from 'react';
import '../component/Whether-style.css';


///////////  create hooks variable to ubdate the data //

const Whether = () => {
     const [city, setCity] = useState();
     const [search, setSearch] = useState("Pune");

     ////////////////  fetch rest whether api data using useEffect///

     useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a5060cd3287d2b5fcfd3ba0012227594`;
            const response = await fetch(url);
            const resJson = await response.json();

            setCity(resJson.main)
            
        }

        fetchApi();
        
     }, [search])
     console.log(city);  

  return (
   
    <div className='container'>
        <div className='box'>
        <h1 className='heading'>Whether app</h1>
            <div className='input'>
                <input 
                type="search"
                placeholder='Enter City name' 
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value)
                }}/>
            </div>
            {
                !city ? (
                    <p className='error'>Oops city not found !</p>
                ):(
                    <div className='info'>
                        <div className='temp'>
                            <h1>{search}</h1>
                            <h2>{city.temp} C</h2>
                            <h3>Min: {city.temp_min}C <br />Max: {city.temp_max}C</h3>
                        </div>
                    </div>
                )
            }
        </div>
      
    </div>
    
  )
}

export default Whether
