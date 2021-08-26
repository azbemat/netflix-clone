import "./App.css";
import requests from "./requests";
import Row from "./Components/Row/Row.js";
import Banner from "./Components/Banner/Banner.js";

function App() {
    return (
        <div className="app">
            <Banner />

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetch_NetflixOriginals}
                isLargeRow
            />
            <Row title="Trending now" fetchUrl={requests.fetch_trendingNow} />
            <Row title="Top rated" fetchUrl={requests.fetch_TopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetch_ActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetch_ComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetch_HorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetch_RomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetch_Documentaries}
            />
        </div>
    );
}

export default App;
