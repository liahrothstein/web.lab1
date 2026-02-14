import { Link } from 'react-router-dom';

import { hobbies } from '@constants/hobbies';

import coding from "../../shared/assets/images/coding-hobby.jpg";
import reading from "../../shared/assets/images/reading.webp";
import tennis from "../../shared/assets/images/table-tennis.jpeg";

import "./HobbyPage.scss";

export function HobbyPage() {
  return (
    <div className="hobbyPage">
      <main className="hobby-page">
        <div className="hobbies-container">
          <header className="hobbies-header">
            <h1>Мои увлечения</h1>
            <p className="subtitle">
              То, что вдохновляет меня вне учебы и формул теоретической физики
            </p>
          </header>
          <section className="hobby-section">
            <div className="hobby-content">
              <h2>01. Творческий кодинг</h2>
              <p>
                Для меня программирование — это не только решение задач, но и
                способ самовыражения. Изучая IT на физическом факультете, я
                нашел особую красоту в визуализации данных и создании
                интерфейсов.
              </p>
              <ul className="hobby-list">
                <li>Изучение современных фреймворков (React, Vue)</li>
                <li>Создание генеративного искусства на Python</li>
                <li>Участие в хакатонах и open-source проектах</li>
              </ul>
            </div>
            <div className="hobby-image">
              <img src={coding} alt="Coding" />
            </div>
          </section>
          <section className="hobby-section reverse">
            <div className="hobby-content">
              <h2>02. Настольный теннис</h2>
              <p>
                Физика полета мяча в настольном теннисе — это отдельный вид
                искусства. Это хобби помогает мне переключиться после длительной
                работы за монитором, развивает реакцию и стратегическое
                мышление.
              </p>
              <div className="quote-box">
                <blockquote>
                  "Спорт — это единственное зрелище, в котором, несмотря на
                  количество повторов, конец всегда остается неизвестным."
                </blockquote>
              </div>
            </div>
            <div className="hobby-image">
              <img src={tennis} alt="Table Tennis" />
            </div>
          </section>
          <section className="hobby-section">
            <div className="hobby-content">
              <h2>03. Чтение и саморазвитие</h2>
              <p>
                Моя библиотека состоит как из классической литературы, так и из
                научно-популярных изданий. Особенно меня увлекают труды по
                истории науки и биографии великих ученых.
              </p>
              <div className="books-grid">
                <div className="book-card">
                  Ричард Фейнман "Вы конечно шутите, мистер Фейнман"
                </div>
                <div className="book-card">
                  Стивен Хокинг "Краткая история времени"
                </div>
                <div className="book-card">Айзек Азимов - цикл "Основание"</div>
              </div>
            </div>
            <div className="hobby-image">
              <img src={reading} alt="Reading" />
            </div>
          </section>
          <section className="hobby-gallery">
            <h2>04. Взгляд через объектив</h2>
            <p>
              Иногда я беру камеру и отправляюсь на прогулку по Гомелю, чтобы
              запечатлеть эстетику ГГУ или тишину парка.
            </p>
            <div className="image-grid">
              {hobbies.map((photo) => (
                <div className="grid-item" key={photo.caption}>
                  <img src={photo.image} alt={photo.caption} />
                </div>
              ))}
            </div>
          </section>
          <footer className="hobbies-footer">
            <Link to="/web.lab1/main" className="btn-back">
              <span className="icon">←</span> На главную
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}
