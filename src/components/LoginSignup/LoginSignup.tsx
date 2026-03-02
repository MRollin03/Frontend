import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import SteamIcon from "../../assets/steam-1.svg";

const LoginSignup = () => {
    const handleSteamLogin = () => {
        window.location.href = 'http://localhost:8080/auth/steam';
    };

    return (
        <section className="submission-section" id="verify">
            {/* Animated background gradients */}
            <div className="bg-animation"></div>

            {/* Grid overlay */}
            <div className="grid-overlay"></div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        left: `${10 + i * 15}%`,
                        animationDelay: `${i * 1}s`
                    }}
                ></div>
            ))}

            <div className="form-container">
                
                <h2 className="section-title">Login</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--pink-soft)' }}>
                    Link your account to unlock voting and exclusive features
                </p>
                
                <form>
                    <div className="inputField">
                        <label htmlFor="username">Username</label>
                        <div className="inputfield">
                            <IoMdPerson className="input-icon" />  
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="inputField">
                        <label htmlFor="password">Password</label>
                        <div className="inputfield">
                            <FaLock className="input-icon" />  
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                    
                    <button type="submit" className="login-button">
                        Login            
                    </button>
                </form>

                <div className="divider">
                    <span>OAuth</span>
                </div>
                
                <div className="center">
                    <button className="steam-button" onClick={handleSteamLogin}>
                        <img src={SteamIcon} alt="Steam" className="steam-icon" />
                        Sign in through Steam
                    </button>
                    <p className="disclaimer">This site not associated with Valve Corp.</p>
                </div>
                
            </div>
        </section>
    );
}

export default LoginSignup;