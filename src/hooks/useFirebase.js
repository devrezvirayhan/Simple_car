import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () =>{
    const [users, setUsers] = useState({})
    const auth = getAuth();


    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.users)
        });
    }

    const logOut  = ()=>{
        signOut(auth)
        .then(()=>{ })
    }

    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        });
        return ()=> unsubscribed;
    },[])




    
    return{
        users,
        signInUsingGoogle,
        logOut
    }
}


export default useFirebase;