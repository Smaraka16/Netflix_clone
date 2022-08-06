import "./App.css";
import Row from "./Row";
import Banner from './Banner'
import request from "./request";
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="TRENDING" fetchUrl={request.fetchTrending} />

      <Row title="ACTION" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORROR" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
