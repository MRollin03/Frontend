import React, { useEffect, useState } from 'react';
import type { User } from "../../../types/user";
import { PiCoinsLight } from "react-icons/pi";
import "../Profle.css";


import ProfileHeader from './ProfileHeader';


// eslint-disable-next-line react-refresh/only-export-components
export const fetchMe = async (): Promise<User | null> => {
    const res = await fetch("http://localhost:8080/api/me", {
        credentials: "include"
    });

    if (!res.ok) return null;

    return res.json();
};

const Profile: React.FC = () => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMe().then(u => {
            setUser(u);
            setLoading(false);
        });
    }, []);


    if (loading) {
    return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Not logged in</div>;
    }


    return (

       <>
       <ProfileHeader user={user}/>
            <div className="glow-orb glow-orb-1"></div>

            <div className="container">

                <div className="profile-top">

                    <div className="pfp-wrapper">
                        <img src={user.avatar} alt="avatar" className="profile-pfp"/>
                        <div className="pfp-glow"></div>
                    </div>

                    <div className="bio-card">
                        <h2>{user.username}</h2>
                        <p className="steam-id">Steam ID: {user.steamId}</p>
                        <p className="bio-text">
                            Elite map creator. XP grinder. Probably cooler than you.
                        </p>
                    </div>

                </div>
                
                <div className='value-section'>
                    <div className='value'>
                        <PiCoinsLight className="icon"/>
                        <h2> Coins </h2>
                        <h2> {user.coins}</h2>
                    </div>
                    <div className='value'>
                        <PiCoinsLight className="icon"/>
                        <h2> XP </h2>
                        <h2> {user.xp}</h2>
                    </div>
                </div>

                
            </div>
        
        </>
    );
};

export default Profile;
