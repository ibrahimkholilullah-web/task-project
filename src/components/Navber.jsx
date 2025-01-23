import React from 'react';
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navber =async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
   return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          
          <a href='/' className="btn btn-ghost text-xl">Home</a>
        </div>
        
          
        <div className="navbar-end">
         
            
            {
              user ? <>
             <div className='flex items-center gap-4'>
             <p className=" text-sm flex items-center space-x-2">
                <span className="">{user?.family_name}</span>
               
              </p>
              
              <LogoutLink>Log out</LogoutLink></div> 
              </>:<LoginLink>Sign in</LoginLink>
            }
        </div>
      </div>
    </div>
  );
};

export default Navber;
