function InitialPage({setData, handleReset}) {
    function selectGame(name) {
      setData(name)
      handleReset()
    }
    return (
      <section className="rules container">
        <h2>Добро пожаловать!</h2>
        <p>Memory — игра для тренировки визуальной памяти</p>
        <div className="rules-panel">
          <h3>Правила игры</h3>
          <ul className="rules-list">
            <li>В наборе есть множество карточек – по две штуки с одним и тем же рисунком.</li>
            <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
            <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
          </ul>
        </div>
        <button className="ico-button ico-button-cats" type="button" onClick={() => selectGame('cats')}>Котики</button>
        <button className="ico-button ico-button-flowers" type="button" onClick={() => selectGame('flowers')}>Цветочки</button>
        <button className="ico-button ico-button-cars" type="button" onClick={() => selectGame('cars')}>Машины</button>
      </section>
    );
  }

  export default InitialPage;

