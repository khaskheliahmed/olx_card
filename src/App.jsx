import React, { useState } from 'react'
import Card from './compounts/card'

const App = () => {

  return (
    <>

    <h1 className='text-center font-serif  text-sky-400 p-11'> Car section...</h1>
    
     <div className='flex justify-evenly'>

      <div className=''>
      <Card src="https://images.olx.com.pk/thumbnails/488135123-800x600.webp" price= " Rs : 130000000"  
        
        title= " HONDA CIVIC CVT VTEC 1.8" 
         year= " 1 KM : 2017"
         name="civic"
      
      />
      </div>
      

      
    
   <div className=''>

   <Card src="https://images.olx.com.pk/thumbnails/489477909-800x600.webp" price= " Rs : 130000000"  
        
        title= " HONDA CIVIC CVT VTEC 1.8" 
         year= " 1 KM : 2017"
         name="civic"

/>




   </div>




<div className=''>
<Card src="https://images.olx.com.pk/thumbnails/490569251-800x600.webp" price= " Rs : 130000000"  
        
        title= " HONDA CIVIC CVT VTEC 1.8" 
         year= " 1 KM : 2017"
         name="civic"

/>
</div>




   
      </div>   
        

        
      
        
       
    
    
      
      
    </>
  )
}

export default App


