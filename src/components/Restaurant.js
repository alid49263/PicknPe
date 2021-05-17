import  Card from './Card'
import React, { useEffect, useState} from 'react'
import './Restaurant.css'
import SearchBar from './SearchBar'
import { useLocation } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import Loading from './Loading'

function Restaurant() {
    const location=useLocation()
    const [res, setRes] = useState()
    const [meal, setMeal] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setloading] = useState(false)
    const callback=(args)=>{
          setSearchTerm(args);
          console.log(searchTerm);
          setMeal(searchTerm)
    }
    useEffect(() => {
        if(location.my){
              localStorage.setItem("res",location.my);
        }
        setRes(localStorage.getItem("res"))
        let mounted = true;
        setloading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response=>response.json())
        .then(items => {
            if(mounted) {
              setMeal(items.meals)
              setloading(false)
            }
            
        })
        
        
        return () =>mounted = false;
      }, [searchTerm,res,location.my])
    return (
        <div className="page-container">
            {loading&&<Loading/>}
            <SearchBar callback={callback}/>
            <hr />
           <div className="main-body">
           <div className="rest">
               <FontAwesomeIcon icon={faHotel}/>
               <h2>{res}</h2>
           </div>
           {Array.isArray(meal)&&meal.map((item,id)=>{
                return(
                    <Card key={id} item={item} />
                )
            })}
           </div>
        </div>
    )
}

export default Restaurant


