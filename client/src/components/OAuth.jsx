import React from 'react'

const OAuth = () => {

    const handleGoogleClick=async()=>{
        try {
            
        } catch (error) {
            console.log("Could not sign in with google",error);
            
        }

    }
  return (
   <button onClick={handleGoogleClick} type='button' className='bg-red-700  text-white p-3 rounded-lg uppercase hover:opacity-95'>
    Continue With Google

   </button>
  )
}

export default OAuth