import React from 'react';
import useFetch from '../useFetch';

export default function Home() {
  const  images = useFetch()

  console.log({images})
  
  return (
    <div>
     <h1>Hello</h1>
    </div>
  )
}
