import './PortfolioPage.css'

export function PortfolioPage () {
  return (
      <section className="dfp-container">
        <h1>Mis trabajos</h1>
        <p>Estos son algunos de mis proyectos</p>
        <article className='dfp-projects'>
          <a href="https://91bb8967-e5f3-4f6b-859c-3bd87c929a68.filesusr.com/ugd/25cca6_4a5270c5a842496eb17653ec1687c619.pdf" target='_blank' className='dfp-project-pucelacup' rel="noreferrer"/>
          <a href="https://91bb8967-e5f3-4f6b-859c-3bd87c929a68.filesusr.com/ugd/25cca6_9a7ce828a0c64ccca051f26496c3aa93.pdf" target='_blank' className='dfp-project-vuelta' rel="noreferrer"/>
          <a href="https://drive.google.com/drive/folders/19rzcBWCORuqhndq-fD4L2m7KQVYbW4UI" target='_blank' className='dfp-project-maraton' rel="noreferrer"/>
        </article>
      </section>
  )
}
