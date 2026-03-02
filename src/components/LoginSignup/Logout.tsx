import React,  {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types/user";
import "./LoginSignup.css"

// eslint-disable-next-line react-refresh/only-export-components
export const fetchMe = async (): Promise<User | null> => {
    const res = await fetch("http://localhost:8080/api/me", {
        credentials: "include"
    });

    if (!res.ok) return null;

    return res.json();
};

const Logout: React.FC= () => {

    
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMe().then(u => {
            setUser(u);
        });
    }, []);


  if (!user) {
    return(
        <>
        <a onClick={() =>navigate("/")}> &larr; back</a>
        <h1> You are not logged in? Ò-o</h1>
    </>
    )
  }
  
  return (
    <>
    <div className="logout-div">
        <a onClick={() =>navigate("/")}> &larr; back</a>
        <button> LOG OFF</button>
    </div>
    </>

  ); 
};

export default Logout