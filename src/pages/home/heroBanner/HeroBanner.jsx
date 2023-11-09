import React, {useState} from 'react'
import "./HeroBanner.scss"
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); 
  
  const searchQueryHandler = (event) => {
      if(event.key === "Enter" && query.length > 0) {
         navigate(`/query/${query}`)
      }
  }

  console.log("qyue", query)

  return (
    <div className='heroBanner'>
       <div className="wrapper">
           <div className="heroBannerContent">
               <span className="title">Welcome</span>
               <span className="subTitle">Millions of movies, TV shows and people to discover.
               Explore now.</span>

               <div className="searchInput">
                <input 
                    type="text"
                     placeholder='Search for a movie ot tv show....'  
                     onKeyUp={searchQueryHandler}
                     onChange={(e) => setQuery(e.target.value)}/>
                     <button>Search</button>
               </div>
           </div>
       </div>
    </div>
  )
}

export default HeroBanner