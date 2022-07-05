import ListItem from '../listItem/ListItem';
import { getDatas } from '../../utils/fetchApi';

const moviesList = [
    {
        title: 'TOP NETFLIX MOVIES',
        getData: getDatas.fetchNetflixOriginals,
        isMaxWidth: true,
    },
    {
        title: 'Top Trending Movies',
        getData: getDatas.fetchTrending,
    },
    {
        title: 'Top Rated Movies',
        getData: getDatas.fetchTopRated,
    },
    {
        title: 'Top Trending Movies',
        getData: getDatas.fetchRomanceMovies,
    },
    {
        title: 'Horror Movies',
        getData: getDatas.fetchHorrorMovies,
    },
    {
        title: 'Documantaries Movies',
        getData: getDatas.fetchDocumantaries,
    },
    {
        title: 'Comedy Movies',
        getData: getDatas.fetchComedyMovies,
    },
    {
        title: 'Action Movies',
        getData: getDatas.fetchActionMovies,
    },
];

const Lists = () => {
    return (
        <div style={{ marginLeft: '50px', marginTop: '50px' }}>
            {moviesList.map((movie, index) => (
                <ListItem key={index} title={movie.title} getData={movie.getData} isMaxWidth={movie.isMaxWidth} />
            ))}
        </div>
    );
};

export default Lists;
