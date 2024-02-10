import {useState} from 'react';
import {AppRoute} from './settings';
import GamePage from './components/GamePage';
import ResultsPage from "./components/ResultsPage";
import InitialPage from "./components/InitialPage";


function App({ results, getImages, images = getImages() }) {
  const [page, setPage] = useState(AppRoute.Initial);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([])
  // TODO: добавьте состояние текущего набора карточек

  const showResults = (stepsCount) => {
    setResult(stepsCount);
    setPage(AppRoute.Results);
  };
  const handleReset = () => {
    setPage(AppRoute.Game);
  };
  const choosePhotos = () => {
    setPage(AppRoute.Initial)
  }
  const getPage = (route) => {
    switch (route) {
      case AppRoute.Game:

        return <GamePage images={getImages(data)} onShowResults={showResults} data={data} />;
      case AppRoute.Results:
        return (
          <ResultsPage
            stepsCount={result}
            onResetGame={choosePhotos}
            results={results}
            getDeclension={getDeclension}
          />
        );
      case AppRoute.Initial:
        return <InitialPage setData={setData} handleReset={handleReset}/>
      default:
        return null;
    }
  };
  return getPage(page);
}

function getDeclension(obj) {
  switch (true) {
    case obj.count === 1:
      return `${obj.count} шаг`
    case obj.count < 5:
      return  `${obj.count} шага`
    default:
      return `${obj.count} шагов`
  }
}

export default App;
