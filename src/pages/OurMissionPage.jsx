import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png"

export default function OurMissionPage() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-row gap-2 m-5 justify-center items-center bg-gray-800 rounded">
                <img src={logo} alt="logo" className="w-1/2 h-1/2"/>
                <div className="text-center w-100">
                    <h1 className="font-bold text-3xl">Nuestra Mision</h1>
                    <br />
                    <p>Proyecto FireWatch es una iniciativa basada en Barranquilla, Colombia, y actualmente cubre el Departamento del Atlántico, con la meta de eventualmente funcionar a un nivel nacional por toda Colombia. Nuestra misión es ayudar a combatir la longeva epidemia de quemas de bosque y proteger el plano y extensión silvestre de nuestro país y la biodiversidad que nos hace quienes somos. Nuestro sistema se basa en el apoyo público para alertas tempranas y detección eficiente de incendios en la zona, así que mil gracias a ti y a todos quienes reporten, pues su información(sin importar cuándo), nos ayuda a nosotros, al país, y a sus animales.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}