import { Header } from '../components/Header'
import './PortfolioPage.css'

export function PortfolioPage () {
  return (
    <div>
      <Header/>
      <section className="dfp-container">
        <h1>Mis trabajos</h1>
        <p>Estos son algunos de mis proyectos</p>
        <article className='dfp-projects'>
          <a href="#dfp-pucelacup-container" className='dfp-project-pucelacup'/>
          <a href="#dfp-vuelta-container" className='dfp-project-vuelta' />
          <a href="#dfp-maraton-container" className='dfp-project-maraton' />
          <a href="#dfp-tiktok-container" className='dfp-project-tiktok' />
        </article>
        <div id='dfp-pucelacup-container' className='dfp-linedivider' />
        <article className='dfp-project-container'>
          <h2>Pucela Cup</h2>
          <section className='dfp-project-img-container'>
            <img src='../../assets/PucelaCup/PucelaCup1.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup2.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup3.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup4.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup5.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup6.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup7.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup8.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/PucelaCup/PucelaCup9.png' alt='An image of the Pucela Cup Event'/>
          </section>
        </article>
        <div id='dfp-vuelta-container' className='dfp-linedivider' />
        <article className='dfp-project-container'>
          <h2>La Vuelta</h2>
          <section className='dfp-project-img-container'>
            <img src='../../assets/Vuelta/Vuelta1.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta2.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta3.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta4.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta5.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta6.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta7.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta8.png' alt='An image of the La Vuelta Event'/>
            <img src='../../assets/Vuelta/Vuelta9.png' alt='An image of the La Vuelta Event'/>
          </section>
        </article>
        <div id='dfp-maraton-container' className='dfp-linedivider' />
        <article className='dfp-project-container'>
          <h2>XXXIV Valladolid Maratón</h2>
          <section className='dfp-project-img-container'>
            <img src='../../assets/Maraton/Maraton1.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton2.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton3.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton4.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton5.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton6.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton7.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton8.png' alt='An image of the Pucela Cup Event'/>
            <img src='../../assets/Maraton/Maraton9.png' alt='An image of the Pucela Cup Event'/>
          </section>
        </article>
        <div id='dfp-tiktok-container' className='dfp-linedivider' />
        <article className='dfp-project-container'>
          <h2>TikTok Proyecto Fin de Grado</h2>
          <video src='../../assets/TikTokDiego.mp4' controls />
        </article>
      </section>
    </div>
  )
}
