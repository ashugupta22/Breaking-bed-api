import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./header.css"

function Header(){
    const [Character, setCharacter] = useState([]);

    useEffect(() =>{
        let data = axios.get("https://www.breakingbadapi.com/api/characters");
        data
            .then(function (res){
                setCharacter(res.data);
            })
            .catch(function (error){
                console.log(error);
            });

    }, []);


    return(
        <>
        <h1>Breaking Bed Characters Listing</h1>
        <Card character={Character}/>
        </>
    )
}
export default Header;