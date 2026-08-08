import logo from '../assets/logo.png'
import Map from '../components/Map.jsx'
import Navbar from '../components/Navbar.jsx'

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col'>
        <div id='map-preview' className='grid'>
          <Map style='w-screen h-[40rem] col-start-1 row-start-1' lng='-74.989' lat='10.9878' zoom={12} minZoom={12}/>
          <div className="card bg-gray-700 w-96 shadow-sm col-start-1 row-start-1 h-100 relative top-30 left-1 sm:left-7 md:left-20 scale-90">
            <div className='card-body'>
              <h2 className='card-title text-xl'>Registro de Incendios del Atlántico</h2>
              <p className='text-lg'>Cada dia, incendios y quemas ilegales estan ocurriendo alrededor de la Costa Atlántica de Colombia.
                Esta pagina se enfoca en documentar y hacer publicas las instancias de estos incendios para asi poder
                facilitar su prevencion. Ayudanos a rellenar nuestra base de datos, que cada dia se vuelve mas expansiva.
              </p>
              <div class="card-actions justify-start">
                <button class="btn btn-warning">Reportar Un Incendio</button>
              </div>
            </div>
          </div>
        </div>
        <div id='stats' className='flex flex-row items-center justify-between bg-gray-700 w-screen h-50'>
          <div className='flex-1 text-center'>
            <p className='md:text-4xl text-3xl font-bold'>171</p>
            <p className='md:text-2xl text-xl'>incendios forestales en 2026</p>
          </div>
          <div className='divider divider-horizontal'></div>
          <div className='flex-1 text-center'>
            <p className='md:text-4xl text-3xl font-bold'>346</p>
            <p className='md:text-2xl text-xl'>quemas ilegales en 2026</p>
          </div>
          <div className='divider divider-horizontal'></div>
          <div className='flex-1 text-center'>
            <p className='md:text-4xl text-3xl font-bold'>150ha</p>
            <p className='md:text-2xl text-xl'>perdidas entre 2001 y 2025</p>
          </div>
        </div>
        <div id='more-stats' className='hidden md:flex flex-row justify-center items-center'>
          <iframe className='rounded m-5' width="630" height="580" frameborder="0" src="https://globalnaturewatch.org/embed/widget/treeLossTsc/country/COL/4"></iframe>
          <iframe className='rounded m-5' width="630" height="540" frameborder="0" src="https://globalnaturewatch.org/embed/widget/treeLossFiresAnnual/country/COL/4"></iframe>
        </div>
        <footer className='footer footer-horizontal w-screen p-10 mt-5 bg-gray-700'>
          <aside className='flex flex-row'>
            <div>
              <img src={logo} alt="logo" className='w-35 h-35 object-contain' />
            </div>
            <p className='font-bold text-xl relative top-[50%] translate-y-[-50%]'>Proyecto FireWatch Atlántico</p>
          </aside>
          <nav>
            <h6 className="footer-title">About</h6>
            <a className="link link-hover">Sobre Nosotros</a>
            <a className="link link-hover">Contactanos</a>
            <a className="link link-hover">Nuestra Mision</a>
          </nav>
        </footer>
      </div>
      
    </>
  )
}