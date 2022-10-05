import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div>
            <div className='flex items-center'>
              <CheckCircleIcon className='h-4 w-4 bg-green-600 rounded-2xl text-green-300'/>
              <p className='ml-2'>{feature}</p>
            </div> 
            
        </div>
    );
};

export default Feature;