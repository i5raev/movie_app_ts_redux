import React, {useRef} from "react";
import FavOn from "../../assets/images/fav_on.png";
import FavOff from "../../assets/images/fav_off.png";
import useLocalStorage from 'react-use-localstorage';
import styles from './style.module.scss';
import {toast} from "react-toastify";

export interface FavouriteProps {
    id: number
}

const Favourite = ({id}: FavouriteProps): JSX.Element | null => {
    const [storageItem, setStorageItem] = useLocalStorage(
        'DFX-favourites',
        JSON.stringify([]),
    )
    const storagedArray = useRef(JSON.parse(storageItem))
    const isFavourited = storagedArray.current.includes(id)

    const handleToggleFavourite = (): void => {
        if (!isFavourited) {
            storagedArray.current.push(id)
            setStorageItem(JSON.stringify(storagedArray.current))
            toast.success('Добавлено в избранное')
        } else {
            const indexFavouritedId = storagedArray.current.indexOf(id)
            storagedArray.current.splice(indexFavouritedId, 1)
            setStorageItem(JSON.stringify(storagedArray.current))
            toast.success('Удалено из избранного')
        }
    }
    return (
        <div className={styles.favourite} onClick={handleToggleFavourite}>
            <img src={isFavourited ? FavOn: FavOff} alt="like"/>
        </div>
    )
}

export default Favourite;
