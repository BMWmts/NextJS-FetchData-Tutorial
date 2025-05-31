import React, { FC } from 'react'

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps>  = ({ title }) => {
  return (
    <header>
        <h1 className='text-3xl font-bold'>{title}</h1>
    </header>
  );
;}

export default Header;