import React, { useEffect, useState } from 'react'

function useInternet() {

    const[online,setOnline]=useState(navigator.onLine);

    const setOnlineStatus=()=>{
        setOnline(true);
    }

    const setOfflineStatus=()=>{
        setOfflineStatus(false);
    }

    useEffect(()=>{

        window.addEventListener("online",setOnlineStatus)
        window.addEventListener("offline",setOfflineStatus)

        return ()=>{

            window.removeEventListener("online",setOnlineStatus)
            window.removeEventListener("offline",setOfflineStatus)

        }

    },[online])

  return online
   
  
}

export default useInternet