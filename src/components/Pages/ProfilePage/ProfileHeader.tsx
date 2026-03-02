
import type { User } from "../../../types/user";
import { Navigate, useNavigate } from "react-router-dom";
import "../Profle.css"

type ProfileHeaderProps = { 
    user: User;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({user}) => {
    const navigate = useNavigate();

    return(
        <>  <a onClick={() =>navigate("/")}> &larr; back</a>
            <h1 className="headerText">This is the Profile of {user.username } </h1>
        </>
    ); 
}
export default ProfileHeader;