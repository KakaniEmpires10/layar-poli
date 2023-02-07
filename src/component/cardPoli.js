import React from 'react'
import CardNomor from './cardNomor'

export default function CardPoli(props) {
  return (
    <>
        <h1 className='text-3xl'><strong>Poli {props.poli}</strong></h1>
        <p>{props.dokter}</p>
        <div className='flex justify-evenly px-4 pt-4 pb-10'>
            <CardNomor />
            <CardNomor />
        </div>
    </>
  )
}
