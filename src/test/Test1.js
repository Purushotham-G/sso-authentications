import React from 'react'

export const Test1 = () => {

    //local storage

    // localStorage.setItem('name', 'purushotham')

    // session storage
    // sessionStorage.setItem('name', 'purushotham infopine')
  return (
    <>
        <p>local storage :-  {localStorage.getItem('name')}</p>
        <p>local storage :-  {sessionStorage.getItem('name')}</p>
    </>
  )
}
