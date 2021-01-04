import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css';
import Login from './Login';
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser)
      if (authUser) {
        //user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    //BEM naming convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
