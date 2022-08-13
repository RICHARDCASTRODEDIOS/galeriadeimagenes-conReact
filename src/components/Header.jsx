import React from 'react'

const Header = ({titulo}) => {
  return (
<div className='container'>
<div className='header'>
        <h1>{titulo}</h1>
    </div>
</div>
  )
}

export default Header