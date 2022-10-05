import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars4Icon, XMarkIcon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open,setOpen]=useState(false);
    const routes = [
        {id:1, name:'Home', path:"/home"},
        {id:2, name:'Products', path:"/products"},
        {id:3, name:'Orders', path:"/orders"},
        {id:4, name:'Contact', path:"/contract"},
        {id:5, name:'About', path:"/about"},
    ]
    return (
        <nav className='bg-purple-300'>
            <div onClick={()=>setOpen(!open)} className="h-8 w-8  md:hidden">
            {
              open?  <XMarkIcon/> : <Bars4Icon /> 
            
            }
         
            </div>
        
           <ul className={`md:flex justify-center absolute  bg-purple-300 w-full md:static duration-500 ease-in-out ${open ? 'top-8': 'top-[-120px]'}`}>
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;