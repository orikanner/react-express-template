import React from 'react'
import '../App.css'
import { useAuth } from '../context/AuthContext'
export const Profile = () => {

  const auth = useAuth();

  return (
    <div className='componenet'>Welcome {auth.user}</div>
  )
}
