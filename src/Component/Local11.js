import React from 'react'

const Local11 = () => {
    // localStorage.setItem('name', 'purusho');
    // sessionStorage.setItem('name', 'tham')
  return (
    <>
        <h1>localStorage: -- {localStorage.getItem('name')}</h1>
        <h2>sessionStorage : ---- {sessionStorage.getItem('name')}</h2>
    </>
  )
}

export default Local11