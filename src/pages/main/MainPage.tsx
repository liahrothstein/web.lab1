import { Link } from "react-router-dom";

import "./MainPage.scss";

export function MainPage() {
  return (
    <div className="mainPage">
      <main>
        <h1>Главная страница</h1>
        <nav>
          <ul>
            <li>
              <Link to="/biography">Обо мне</Link>
            </li>
            <li>
              <Link to="/hobby">Мои хобби</Link>
            </li>
            <li>
              <Link to="/photos">Фотоальбом</Link>
            </li>
            <li>
              <Link to="/">Стажировка</Link>
            </li>
          </ul>
        </nav>
      </main>
      <div className="site-map-container">
        <h2>Архитектура проекта</h2>
        <div className="map-visual">
          <div className="map-node root">
            <span>Главная страница</span>
            <div className="map-branches">
              <div className="branch">
                <div className="node">Обо мне</div>
              </div>
              <div className="branch">
                <div className="node">Мои хобби</div>
              </div>
              <div className="branch">
                <div className="node">Фотоальбом</div>
              </div>
              <div className="branch">
                <div className="node">Стажировка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
