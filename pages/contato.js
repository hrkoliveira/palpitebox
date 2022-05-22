import Link from 'next/link'
import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1>Contato</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato
