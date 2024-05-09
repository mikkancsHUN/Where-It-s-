import './home-page.css'
function HomePage({ title }) {
  return (
    <section className="home__page">
        <img src="/src/assets/logo.svg" alt="" />
        <h1 className='app__title'>{title}</h1>
        <h3>Ticketing made easy</h3>
    </section>
    
  )
}

export default HomePage