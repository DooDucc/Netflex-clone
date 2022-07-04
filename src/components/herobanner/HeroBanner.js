import { useState, useEffect } from 'react';
import { PlayArrow, ReportGmailerrorred } from '@mui/icons-material';

import classNames from 'classnames/bind';

import { fetchData, getDatas, baseURLImage, getMovie } from '../../utils/fetchApi';
import styles from './HeroBanner.module.scss';

const cx = classNames.bind(styles);

const HeroBanner = () => {
    const [movie, setMovie] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const fetch = async () => {
            const moviesData = await fetchData.get(getDatas.fetchTrending);
            const movies = moviesData.data.results;
            const indexMovie = Math.floor(Math.random() * movies.length - 1);
            const srcImage = `${baseURLImage}${movies[indexMovie]?.backdrop_path}`;
            const title = `${movies[indexMovie]?.original_title || movies[indexMovie]?.original_name}`;
            const desc = `${movies[indexMovie].overview}`;
            const movieId = `${movies[indexMovie].id}`;
            setMovie(srcImage);
            setMovieTitle(title);
            setSubTitle(desc);
            setId(movieId);
        };
        fetch();
    }, []);

    return (
        <div className={cx('banner')}>
            <img className={cx('banner-img')} src={movie} alt="banner" />
            <div className={cx('banner-text')}>
                <h1>{movieTitle}</h1>
                <p>{subTitle}</p>
                <div className={cx('banner-buttons')}>
                    <a className={cx('play-btn')} href={getMovie(id)} target="_blank" rel="noreferrer">
                        <PlayArrow className={cx('icon')} />
                        <span>play</span>
                    </a>
                    <button className={cx('more-btn')}>
                        <ReportGmailerrorred className={cx('icon')} />
                        <span>more details</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
