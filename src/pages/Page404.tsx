import { Link } from 'react-router-dom'

import './Page404.css'

export function Page404 () {
  return (
    <section className='df404-container'>
      <h1 className='df404-statuscode'>
        4
        <strong>
        <svg xmlns="http://www.w3.org/2000/svg" height="150" width="200" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
        </strong>
        4
      </h1>
      <h2 className='df404-statusinfo'>PAGE NOT FOUND</h2>
      <h3 className='df404-phrase'>Lo sentimos, pusiste el dedo en la foto :/</h3>
      <Link to={'/'} target='_self'>
        <p className="df404-goback">Volver al inicio</p>
      </Link>
    </section>
  )
}
