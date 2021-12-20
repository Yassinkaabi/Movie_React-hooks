import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Movielist from './Components/Movielist.js'
import Search from './Components/Search'
import {useState, useEffect} from 'react'

function App() {

  const[movies,setMovies] = useState([
    {
      
      id :uuidv4(),
      name:"Pirates of the Caribbean: The Curse of the Black Pearl",
      image:"https://i.egycdn.com/pic/WmFwZndlY21UbW1UYm1tdmNtbUVjY052bWRmd3h4bA.jpg",
      rating :5,
      year:"2003",
    },
    {
      id :uuidv4(),
      name:"War for the Planet of the Apes",
      image:"https://i.egycdn.com/pic/WmFwZndlY3ZOam1qdmN2Y21tRWNhdk54anZObW1qbXo.jpg",
      rating :4,
      year:"2017",
    },
    {
      id :uuidv4(),
      name:"Spider-Man: No Way Home",
      image:"https://i.egycdn.com/pic/WmFwZndlY21tbWJtbXZOam1vUmN2Y2FtSWx3VEV2dGM.jpg",
      rating :5,
      year:"2021",
    },
    {
      id :uuidv4(),
      name:"مدرسة المشاغبين بالألوان",
      image:"https://i.egycdn.com/pic/WmFwZndlY21IY21vTnBwdkVjUG1wbXdUVEd3YQ.jpg",
      rating :4,
      year:"1973",
    },
    {
      id :uuidv4(),
      name:"Blade ",
      image:"https://i.egycdn.com/pic/WmFwZndlY21ZRW1FbWJtdm1qbWJFY2F2d3h4YXhtTGM.jpg",
      rating :4,
      year:"1998",
    },
    {
      id :uuidv4(),
      name:"Venom: Let There Be Carnage ",
      image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486493_so.jpg",
      rating :4,
      year:"2021",
    },
    ]);

    const [movie, setMovie] = useState({
      name: "",
      image: "",
      rating: "",
      year: "",
    });

  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(1)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
 
  return (
   
    <div className="App">
    <h1 className='head'> Movie app</h1>
    <Search setRate={setRate} />
    <div className='search_movies'>
    <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
    </div>
    <div className="add_Movies">
    <input type="text" placeholder="name" name="name"  onChange={ handleChange}></input>
    <input type="text" placeholder="rating" name="rating" onChange={ handleChange}></input>
    <input type="text" placeholder="year" name="year" onChange={ handleChange}></input>
    <input type="file"  placeholder="image" name="image" onChange={ handleChange} ></input>

    <button type="submit" onClick={handleSubmit}>Add</button>
   </div> 
    <Movielist movies={movies.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/>

   
    
  </div>
);
}
      
  
  
  

export default App;
