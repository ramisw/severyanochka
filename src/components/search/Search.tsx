import SearchIcon from '@/assets/search.svg'
import styles from './Search.module.scss'

export const Search = () => {
    return (
        <div className={styles.search}>
            <input placeholder="Найти товар"/>
            <SearchIcon className={styles.icon}/>
        </div>
    )
}