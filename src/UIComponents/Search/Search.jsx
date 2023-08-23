import SearchItem from 'UIComponents/SearchItem/SearchItem';
import styles from './Search.module.scss';
import search from 'assets/icons/search.png';
import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from 'utils/helper';

export default function Search({ className, placeholder }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [searchItems, setSearchItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const debounced = useCallback(
        debounce((query) => {
            fetchSearchedItems(query);
        }, 750),
        []
    );

    const fetchSearchedItems = async (query) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${baseURL}/dogs?title=${query}`);
            console.log(response);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            // console.log('query', query);
            setSearchItems(data);
            setIsLoading(false);
            console.log('data', data)
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    
    const onChangeSearch = (e) => {
        setIsLoading(true);
        setQuery(e.target.value);
        debounced(e.target.value);
    };
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    useEffect(() => {
        const windowClick = (e) => {
            if (searchRef.current && !e.composedPath().includes(searchRef.current)) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener('click', windowClick);
        return () => window.removeEventListener('click', windowClick);
    }, []);
    useEffect(() => {
        setIsVisible(false);
    }, [navigate]);

    const onClickSearch = () => {
        inputRef.current.focus();
        setIsVisible(true);
    };
    return (
        <>
            <div className={styles.container}>
                <div
                    className={`${styles.searchBox} ${className ? className : ''}`}
                    onClick={onClickSearch}
                    ref={searchRef}
                >
                    <img src={search} alt="search" className={styles.searchIcon} />
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder={placeholder ? placeholder : 'Search something here!'}
                        ref={inputRef}
                        onChange={onChangeSearch}
                    />
                </div>
                {isVisible &&
                    query &&
                    (isLoading ? (
                        <span className={styles.loading}>Loading...</span>
                    ) : (
                        <div className={styles.dropdown}>
                            <ul className={styles.dropdownList}>
                                {searchItems ? (
                                    // searchItems.slice(0, 4).map((item) =>
                                    <>
                                        <SearchItem
                                            key={searchItems._id}
                                            // SKU={searchItems.SKU}
                                            title={searchItems.title}
                                            gene={searchItems.gene}
                                            age={searchItems.age}
                                            location={searchItems.location}
                                            images={searchItems.images}
                                        />
                                        {/* <SearchItem
                                            key={searchItems._id}
                                            // SKU={searchItems.SKU}
                                            title={searchItems.title}
                                            gene={searchItems.gene}
                                            age={searchItems.age}
                                            location={searchItems.location}
                                        /> */}
                                    </>
                                ) : (
                                    // )
                                    <p className={styles.notFound}>There is nothing found for your query...</p>
                                )}
                            </ul>
                            {searchItems.length > 4 && (
                                <Link to={`/dogs/search=${query}`}>
                                    <a href="/node_modules" className={styles.seeAll}>
                                        See all...
                                    </a>
                                </Link>
                            )}
                        </div>
                    ))}{' '}
            </div>
        </>
    );
}
