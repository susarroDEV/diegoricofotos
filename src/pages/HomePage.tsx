import { Link } from 'react-router-dom'
import { SocialMediaIcons } from '../utils/SocialMediaIcons'

import './HomePage.css'

export function HomePage () {
  return (
      <main>
        <article className='dfh-brand'>
          <h1>diegoricofotos</h1>
        </article>
        <article className='dfh-logo'>
        </article>
        <article className='dfh-photo'>
        </article>
        <article className='dfh-employment'>
          <h2>📸 <br />Fotógrafo & Videógrafo</h2>
        </article>
        <article className='dfh-name'>
          <p>
            Me llamo
              <br/>
              <strong>
                Diego Rico
              </strong>
          </p>
        </article>
        <article className='dfh-ubication'>
          <p>📍 Valladolid, España</p>
        </article>
        <article className='dfh-phrase'>
          <p>
            { '"Cada uno tiene su kit de herramientas, el mío es una cámara y un objetivo."'}
          </p>
        </article>
        <article className='dfh-socialmedia'>
          <ul>
            <li>
              <a href="https://www.instagram.com/diegoricofotos/"> {SocialMediaIcons.instagramIcon} </a>
            </li>
            <li>
              <a href="https://www.facebook.com/diegoricofotos/"> {SocialMediaIcons.facebookIcon} </a>
            </li>
            <li>
              <a href="https://twitter.com/diegoricofotos"> {SocialMediaIcons.twitterIcon} </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@diegoricofotos/"> {SocialMediaIcons.tiktokIcon}</a>
            </li>
          </ul>
        </article>
        <article className='dfh-contact'>
          <p>diegoricofotos@gmail.com</p>
          <p>📞+34 618 38 22 71</p>
          <a href="https://wa.me/+34618382271"> {SocialMediaIcons.whatsappIcon} WhatsApp</a>
        </article>
        <article className='dfh-nav'>
          <Link to={'/trabajos'} target='_self'>
            <p>💼 Trabajos</p>
          </Link>
          <Link to={'/sobre-mi'} target='_self'>
            <p>👤 Sobre mí</p>
          </Link>
          <p>🌄 Encargos</p>
        </article>
      </main>
  )
}
