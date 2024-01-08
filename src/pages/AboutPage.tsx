import { Header } from '../components/Header'

import './AboutPage.css'

export function AboutPage () {
  return (
    <div>
      <Header/>
      <section className="dfs-container">
          <h1>Sobre mí</h1>
          <p>Me llamo <strong>Diego Rico</strong> y soy un fotógrafo de Valladolid. Me encanta la fotografía y me encanta poder <strong>capturar los mejores momentos de la vida</strong> de las personas.</p>
          <p>Desde muy pequeño he estado con la cámara en la mano, hasta que en 2021 decidi estudiar el <strong>Grado Superior en Imagen y Sonido</strong> en el Instituto Vega del Prado, de Valladolid.</p>
          <p>Sin duda una de las mejores experiencias de mi vida.</p>
          <p>En este tiempo he aprendido a usar programas de edición de imagen y video como <strong>Photoshop, Lightroom, Premiere Pro, After Effects, Audition, etc.</strong></p>
          <p>Me gusta la fotografía de eventos y de retratos.</p>
          <p>He trabajado en eventos como la Pucela Cup, La Vuelta, el XXXIV Valladolid Maratón, etc.</p>
          <p>Ademas he colaborado con diversas empresas u organismos como son:</p>
          <ul>
            <li>
              <img src="../../assets/Colaboraciones/AyuntamientoSantovenia.png" alt="The Logo of the Santovenia's Townhall" />
            </li>
            <li>
              <img src="../../assets/Colaboraciones/EspacioJoven.png" alt="The Logo of Espacion Joven" />
            </li>
            <li>
              <img src="../../assets/Colaboraciones/Imako.png" alt="The Logo of Imako" />
            </li>
            <li>
              <img src="../../assets/Colaboraciones/OkamiClothing.png" alt="The Logo of Okami Clothing" />
            </li>
          </ul>
          <p>Sin duda, mi mayor aprendizaje ha sido el comprender que en este <strong>mundo tan dinámico</strong> no puedes pararte ni un solo momento, <strong>debes estar en constante aprendizaje.</strong></p>
          <p>Si quieres ponerte en contacto conmigo, puedes hacerlo a través de mis redes sociales o a través de mi correo electrónico.</p>
          <h2>¡Espero que te guste mi trabajo!</h2>
        </section>
        <section className='dfs-img'>
          <img src="../../assets/DiegoAbout.png" alt="An image of Diego Rico taking a picture" className='dfs-img-one'/>
          <img src="../../assets/DiegoBackAbout.png" alt="An image of Diego Rico taking a picture" className='dfs-img-two'/>
        </section>
    </div>
  )
}
