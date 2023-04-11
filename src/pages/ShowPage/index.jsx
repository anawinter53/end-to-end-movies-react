import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components'; 

export default function ShowPage() {
  const {id} = useParams();
  const [show, setShow ] = useState({image:{}, rating:{}});

  useEffect(() => {
    async function displayShow() {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
      const data = await res.json()
      setShow(data)
    }

    displayShow()
  }, [])

  return (
    <ShowCard show={show}/>
  )
}
