import  ResultsTable  from "./ResultsTable";

function ResultsPage({ stepsCount, results, onResetGame, getDeclension }) {
    // TODO: примените getDeclension для правильного склонения числа шагов
    return (
      <section className="result container">
        <h2>Лучшие результаты:</h2>
        <p>Вы завершили игру за <b>{getDeclension({ count: stepsCount, one: 'шаг', few: 'шага', many: 'шагов' })}</b>, так держать!</p>
        <ResultsTable current={stepsCount} results={results} />
        <p>Хотите попробовать ещё раз?</p>
        <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
      </section>
    );
  }

  export default ResultsPage;