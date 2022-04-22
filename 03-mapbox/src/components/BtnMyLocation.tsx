import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"

export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext)
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {
        if (!isMapReady) throw new Error("Mapa no está listo");
        if (!userLocation) throw new Error("No hay ubicación del usuario");
        
        map?.flyTo({
            zoom: 14,
            center: userLocation
        })
    }
    
    return (
        <button
            onClick={ onClick }
            className="fixed right-3 top-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 rounded-full text-sm p-2 text-center inline-flex items-center mr-2"
        >
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}
