import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../utils/supabase'
import SelectionMap from './SelectionMap.jsx'

export default function ReportForm(props) {
    const [location, setLocation] = useState()
    const [fireLocation, setFireLocation] = useState()
    const report_type = useRef()
    const image = useRef()
    const notes = useRef()

    useEffect(()=>{
        if (!navigator.geolocation) {
            return;
        }

        const handleSuccess = (pos) => {
            setLocation([pos.coords.longitude, pos.coords.latitude])
        };

        const handleError = (err) => {
          alert(err.message);
        };

        let location = navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
    }, [])

    const handleSignIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({ email: "pizzalawls@gmail.com", password: "iamamir1234" })
        if (error) console.error('Error signing in:', error.message)
        return data
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if(report_type.current.value == "") {
            alert("Por favor especifica tu distancia al incendio.")
            return
        }
        if(fireLocation == undefined) {
            alert("Por favor estima la ubicación del incendio en el mapa.")
            return
        }
        if(location == undefined) {
            alert("Por favor permite que se utilize tu ubicación.")
        }
        if(image.current.files.length == 0) {
            alert("Por favor agregue una foto del incendio.")
        }

        let signInData = await handleSignIn()
        const imageFile = image.current.files[0]
        const imagePath = `${Date.now()}_report`

        const { data: uploadData, error: uploadError } = await supabase.storage.from('images').upload(imagePath, imageFile, {
            cacheControl: '3600',
            upsert: false
        })

        if (uploadError) {
            console.error('Upload failed:', uploadError.message)
            return null
        }

        const { data: urlData } = supabase.storage.from('images').getPublicUrl(imagePath)

        const error = await supabase.from('reports').insert({
            report_type: report_type.current.value,
            data: {
                "fire_location": fireLocation,
                "current_location": location
            },
            image: urlData.publicUrl,
            notes: notes.current.value
        })
        if(error) {
            console.error(error)
            props.updateToast(error)
            return
        }
        props.updateToast(false)
        
    }

    return (
        <div className='flex flex-row gap-2'>
            <form className='flex flex-col justify-center gap-2 m-5' onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Reportar un Incendio</legend>

                    <label className="label">¿Que tan cerca estas al incendio?</label>
                        <select name="report_type" className='select select-primary' ref={report_type}>
                        <option value="">Selecciona una opción..</option>
                        <option value="red">Estoy cerca a la llama 🔴</option>
                        <option value="orange">Estoy dentro de la zona del humo 🟠</option>
                        <option value="yellow">Veo de lejos el humo o el brillo de la llama 🟡</option>
                    </select>

                    <label className="label">Toma una foto</label>
                    <input id='photo' type="file" accept="image/*" capture="environment" className='file-input' ref={image}></input>

                    <label className="label">Informacion Adicional:</label>
                    <textarea rows="6" cols="40" wrap="soft" className='textarea textarea-md' ref={notes}></textarea>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            <div className='flex flex-col items-center'>
                <SelectionMap setLocation={setFireLocation} style='w-120 h-100 rounded m-5'/>
                <p className='text-white font-bold relative bottom-3'>Marca la ubicación estimada del incendio</p>
            </div>
        </div>
        
    )
}