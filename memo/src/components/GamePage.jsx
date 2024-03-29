import Progress from "./Progress";
import Grid from "./Grid";
import Modal from "./Modal";
import {useState} from 'react';

const useGame = (images) => {
    const [finishedItems, setFinishedItems] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);

    const checkItems = (firstItem, secondItem) => {
      const firstImage = images.find(({ id }) => id === firstItem);
      const secondImage = images.find(({ id }) => id === secondItem);
      if (firstImage.url === secondImage.url) {
        setFinishedItems((items) => [...items, firstItem, secondItem]);
      }
      setStepsCount((i) => i + 1);
    };

    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;

    return {
      finishedItems,
      stepsCount,
      checkItems,
      isWin
    };
  };

function GamePage({ images = [], onShowResults, data }) {
    const {
      finishedItems,
      stepsCount,
      checkItems,
      isWin
    } = useGame(images);

    const handleResultsClick = () => {
      onShowResults(stepsCount);
    };

    return (
      <section className="game container">
        <Progress value={finishedItems.length / 2} max={images.length / 2} />
        <div className="steps">Шаг {stepsCount}</div>
        <Grid
          images={images}
          finishedItems={finishedItems}
          checkItems={checkItems}
          data={data}
        />
        {isWin && (
          <Modal>
            <h3 className="modal-caption">Победа!</h3>
            <p className="modal-description">Теперь давайте узнаем результаты этой партии</p>
            <button className="button modal-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
          </Modal>
        )}
      </section>
    );
  }

  
export default GamePage;