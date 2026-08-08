import Map from '../components/Map'
import Navbar from '../components/Navbar.jsx'

export default function MapPage(){
    return(
        <>
        <Navbar/>
        <Map style='w-screen h-screen' lng='-74.7833' lat='10.9833'/>
        </>
    )
}