import { useRef, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import ReportForm from '../components/ReportForm.jsx'
import Footer from '../components/Footer.jsx'

const TOAST_VISIBLE_MS = 3000
const TOAST_FADE_MS = 500

export default function ReportPage(){
    const [successVisible, setSuccessVisible] = useState(false)
    const [failureVisible, setFailureVisible] = useState(false)
    const successTimer = useRef(null)
    const failureTimer = useRef(null)

    function showToast(setVisible, timerRef) {
      // clear any pending hide from a previous trigger
      clearTimeout(timerRef.current)
      setVisible(true)
      timerRef.current = setTimeout(() => setVisible(false), TOAST_VISIBLE_MS)
    }

    function updateToast(error) {
      if (error.status != 201) {
        showToast(setFailureVisible, failureTimer)
      } else {
        showToast(setSuccessVisible, successTimer)
      }
    }

    return(
        <>
            <Navbar/>
            <div className='flex justify-center items-center h-screen bg-gray-800 m-10 -p-40 rounded'>
                <ReportForm updateToast={updateToast}/>
            </div>
            <div className="toast toast-bottom toast-end">
              <div className={`alert alert-success transition-opacity duration-500 ${successVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <span>Reporte creado.</span>
              </div>
              <div className={`alert alert-error transition-opacity duration-500 ${failureVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <span>Reporte no pudo ser creado.</span>
              </div>
            </div>
            <Footer/>
        </>
    )
}