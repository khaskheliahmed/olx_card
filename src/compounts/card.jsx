import React from 'react'


const Card = ({ title  , price,  year , src , name , model}) => {
    return (
        <>
    
    
            
             <div className= ' w-full max-w-[325px] rounded overflow-hidden shadow-lg bg-slate-600' >
             <img className='size-80  ' src= {src} alt="" />
             <div className='px-4 py-4'>
                <div className='font-bold text-xl text-gray-800'>
                <h1>{price}</h1>
                <h1> {name} </h1>
                </div>
             
               <div className='text-stone-300 mt-1'> <h1>{title}</h1>


               <h1>
                {year}
               </h1>
               </div>
             </div>
            
                 
             
                  

             </div>
          
        

            
        </>
           
    
    )
}

export default Card
