import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import type { User } from "../../types/user";
import "./Header.css"
import { redirect } from 'react-router-dom';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const fetchMe = async (): Promise<User | null> => {
    const res = await fetch("http://localhost:8080/api/me", {
        credentials: "include"
    });

    if (!res.ok) return null;

    return res.json();
};

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

    useEffect(() => {
        fetchMe().then(setUser);
    });


  if (!user) {
      return (

    
    <header>
        <nav>
          <a onClick={() => scrollToSection('submit')}>Submit Map</a>
          <a onClick={() => scrollToSection('vote')}>Vote</a>
          <a onClick={() => scrollToSection('verify')}>Get Verified</a>
        </nav>
    </header>
  ); 
  }
  
  return (

    
    <header>
        <nav>
          <a onClick={() => scrollToSection('submit')}>Submit Map</a>
            <button className="pfpbutton" onClick={() => navigate("/Profile")}>
              <img className="pfp" src={user.avatar} alt="User avatar" />
            </button>
          <a onClick={() => scrollToSection('vote')}>Vote Map</a>
        </nav>
        
    </header>
  ); 
};

export default Header;