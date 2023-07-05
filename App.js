import React from 'react';
import './Styles/App.css';
import Row from './Components/Row';
import requests from './Functions/requests';
import Banner from './Components/Banner';
import TopBar from './Components/TopBar';

export default function App() {
  return (
    <div className="App">
		<TopBar />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
		<Row title="Trending" fetchUrl={requests.fetchTrending} />
		<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
		<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
		<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
		<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
