import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res =>res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
  <div>
    <PageTitle title='' />
    <p className='mt-12 text-center'>
      O restaurante x sempre busca por atender melhor seus clientes.<br/> 
      Por isso, sempre abertos a ouvir sua opinião.
    </p>
    <div className='text-center my-12'>
      <Link href='/pesquisa'>
        <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg hover: shadow'>Dar opinião ou sugestão</a>
      </Link>
    </div>
    { !data && <p>Carregando...</p> }
    {!error && data && data.showCoupon &&
      <p className='my-12 text-center'>
        {data.message}
      </p>
    }
    
  </div>
  )
}

export default Index
