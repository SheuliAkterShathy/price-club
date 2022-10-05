import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions=[
        {id:1, name:'free', price:0,features:[
            'Awesome Feature',
            'Ajaira Feature',
            'Hudai Feature',
            'Kajnai Feature',
            'Unnecessary Feature',
            'Never used Feature'
        ]},
        {id:2, name:'medium', price:9.99,features:[
            'Everything on Free',
            'Ajaira Feature',
            'Hudai Feature',
            'Kajnai Feature',
            'Unnecessary Feature',
            'Never used Feature'
        ]},
        {id:3, name:'premium', price:19.99,features:[
            'Everything on Premium',
            'Ajaira Feature',
            'Hudai Feature',
            'Kajnai Feature',
            'Unnecessary Feature',
            'Never used Feature'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl bg-indigo-300 p-12 mt-4 font-bold text-white'>Best Deal of the Town</h2>
           <div className='grid md:grid-cols-3 gap-3 mt-5'>
            {
                pricingOptions.map(option=><PriceOption 
                    key={option.id}
                    option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default Pricing;