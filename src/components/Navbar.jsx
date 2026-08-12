import logo from '../assets/logo.png'

export default function Navbar(props) {
    return(
        <>
        <div className={`navbar text-xl bg-gray-700 shadow-sm w-screen h-[10vh] ${props.position} z-20`}>
            <div className='flex flex-row flex-1'>
                <img src={logo} alt="logo-nav" className='object-contain w-20 h-20 -mr-5' />
                <a href="/"><h1 className="btn btn-ghost ml-5 font-bold relative top-5">FireWatch Atlántico</h1></a>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal px-1">
                <section className='md:flex flex-row hidden'>
                    <li><a href='/map'>Mapa</a></li>
                    <li><a href='/report'>Reportar</a></li>
                    <li><a href='https://wa.me/573164188637'>Contactanos</a></li>
                </section>
                <li className='mr-3 md:hidden'>
                  <details>
                    <summary>Paginas</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li><a href='/map'>Mapa</a></li>
                        <li><a href='/report'>Reportar</a></li>
                        <li><a href='https://wa.me/573164188637'>Contactanos</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
        </div>
        </>
    )
}