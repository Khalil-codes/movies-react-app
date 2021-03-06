import { Route, Routes } from "react-router-dom";
import { Header, ScrollToTop } from "./components";
import {
    Home,
    TrendingMovies,
    TopRated,
    UpcomingMovies,
    MovieDetail,
    People,
} from "./pages";

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/trending" element={<TrendingMovies />} />
                <Route path="/upcoming" element={<UpcomingMovies />} />
                <Route path="/movie/:movieId" element={<MovieDetail />} />
                <Route path="/people/:personId" element={<People />} />
            </Routes>
        </>
    );
}

export default App;
