// src/pages/SteamSuccess.tsx

import { useEffect } from "react";

export default function SteamSuccess() {

    useEffect(() => {
        console.log("Steam login successful!");
        // later: fetch session user
    }, []);

    return (
        <div>
            Steam login successful 🎮
        </div>
    );
}
