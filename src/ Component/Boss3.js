import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Boss3 () {
  fetch('http://localhost:3001/api/empids')
  .then(response => response.json())
  .then(data => {
    // Pass the empid values to the frontend component
    <MyComponent empIds={data} />
  })
  return (
    <div>
        
       <h1>{data}</h1>
     
      </div>
)
  }
  