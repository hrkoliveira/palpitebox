import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
      © Projeto desenvolvido por: Herik Oliveira /{' '}
        <a className='hover:underline' href='https://www.linkedin.com/in/herik-oliveira/' target='_blank'>Linkedin</a> /{' '}
        <a  className='hover:underline' href='https://github.com/hrkoliveira' target='_blank'>Github </a>
      </div>
    </div>
  )
}

export default Footer