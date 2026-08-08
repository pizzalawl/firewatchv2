import logo from '../assets/logo.png'

export default function Navbar() {
    return(
        <>
        <div className="navbar text-xl bg-gray-700 shadow-sm w-screen h-[10vh] sticky top-0">
            <img src={logo} alt="logo-nav" className='object-contain w-20 h-20 -mr-5' />
            <h1 className="ml-5 flex-1 font-bold">FireWatch Atlántico</h1>
            <div class="flex-none">
              <ul class="menu menu-horizontal px-1">
                <li><a href='/map'>Mapa</a></li>
                <li><a href='/report'>Reportar</a></li>
                <li><a>Contactanos</a></li>
              </ul>
            </div>
        </div>
        </>
    )
}