import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './LoadingPlaces';

export const SearchResults = () => {

    const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);
    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    const onPlaceClick = (place: Feature) => {
        setActiveId(place.id)
        const [lng, lat] = place.center;
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        })
    }

    const getRoute = (place: Feature) => {
        if (!userLocation) return;
        const [lng, lat] = place.center;
        getRouteBetweenPoints(userLocation, [lng, lat])
    }

    if (isLoadingPlaces) return <LoadingPlaces/>
    
    return (
        <ul className="mt-2 rounded-lg">
            {
                places.map(place => (
                    <li 
                        key={place.id}
                        className={`px-4 py-2 ${ place.id === activeId ? 'bg-cyan-100' : 'bg-white' } hover:bg-gray-200 border-2 rounded-lg cursor-pointer`}
                        onClick={ () => onPlaceClick(place) }
                    >
                        <h3 className="text-lg font-semibold">{ place.text_es }</h3>
                        <p className="text-sm font-light text-justify">
                            { place.place_name }
                        </p>
                        <button
                            onClick={() => getRoute(place)}
                            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 mt-2"
                        >
                            Trazar ruta
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}
