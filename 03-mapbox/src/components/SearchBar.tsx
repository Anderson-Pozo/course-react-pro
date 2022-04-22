import { ChangeEvent, useContext, useRef } from "react"
import { MapContext, PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {

    const debounceRef = useRef<number>();

    const  { searchPlacesByTerm } = useContext(PlacesContext);
    const  { map } = useContext(MapContext);

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        
        if (debounceRef.current) clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            if (event.target.value.length === 0) {
                if (map?.getLayer('RouteString')) {
                    map.removeLayer('RouteString');
                    map.removeSource('RouteString');
                }
            }
            searchPlacesByTerm(event.target.value);
        }, 350);

    }
    
    return (
        <div className="fixed top-2 left-3 w-72">
            <input 
                type="text" 
                className="bg-gray-50 text-gray-900 border-2 border-blue-400 outline-blue-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-1.5"
                placeholder="Search place..."
                onChange={ onQueryChanged }
            />
            <SearchResults/>
        </div>
    )
}
