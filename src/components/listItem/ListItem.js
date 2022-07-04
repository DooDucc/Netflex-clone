import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { PlayArrow, Add, ThumbUp } from '@mui/icons-material';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { fetchData, baseURLImage, getMovie } from '../../utils/fetchApi';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

const ListItem = ({ title, getData, isMaxWidth }) => {
    const [movies, setMovies] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    const rowRef = useRef();

    const handleClick = (direction) => {
        let distance = rowRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
            rowRef.current.style.transform = `translateX(${190 + distance}px)`;
        }
        if (direction === 'right' && slideIndex < movies.length - 6) {
            setSlideIndex(slideIndex + 1);
            rowRef.current.style.transform = `translateX(${-190 + distance}px)`;
        }
    };

    useEffect(() => {
        const fetch = async () => {
            const movieData = await fetchData.get(getData);
            setMovies(movieData.data.results);
        };
        fetch();
    }, []);

    return (
        <div className={cx('list-item')}>
            <h4 className={cx('list-title')}>{title}</h4>
            <ArrowBackIosNewOutlinedIcon className={cx('arrow-slide', 'left')} onClick={() => handleClick('left')} />
            <div className={cx('list-row')} ref={rowRef}>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <div className={cx('list-row-item')}>
                            <img
                                className={cx('list-img')}
                                src={
                                    isMaxWidth
                                        ? `${baseURLImage}${movie.poster_path}`
                                        : `${baseURLImage}${movie.backdrop_path}`
                                }
                                alt={movie.overview_title}
                            />
                            <div className={cx('list-info')}>
                                <div className={cx('info-icons')}>
                                    <Tippy content="Wacth movie" placement="bottom">
                                        <a href={getMovie(movie.id)} target="_blank" rel="noreferrer">
                                            <PlayArrow className={cx('info-icon')} />
                                        </a>
                                    </Tippy>
                                    <Tippy content="Add to your list" placement="bottom">
                                        <Add className={cx('info-icon')} />
                                    </Tippy>
                                    <Tippy content="Like" placement="bottom">
                                        <ThumbUp className={cx('info-icon')} />
                                    </Tippy>
                                </div>
                            </div>
                            <div className={cx('overlay')}></div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowForwardIosOutlinedIcon className={cx('arrow-slide', 'right')} onClick={() => handleClick('right')} />
        </div>
    );
};

export default ListItem;
