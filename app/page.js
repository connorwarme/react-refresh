import { useState } from 'react'

const Header = ({ title }) => {
  return <h1>{title ? title : "Blank Title"}</h1>
}

export default Header;