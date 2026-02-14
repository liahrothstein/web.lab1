import { Link } from "react-router-dom";

import { skills } from "@constants/skills";

import "./TraineePage.scss";

export function TraineePage() {
  return (
    <div className="trainee-page">
      <div className="trainee-card">
        <header className="trainee-header">
          <div className="company-logo">
            <span className="modsen-text">
              MOD<span>SEN</span>
            </span>
          </div>
          <div className="status-badge">Trainee JS Developer</div>
          <h1>Стажировка в IT</h1>
        </header>

        <section className="experience-section">
          <div className="bio-block">
            <h3>Опыт в компании</h3>
            <p>
              В рамках стажировки в <strong>Modsen</strong> я погружен в
              разработку масштабируемых веб-приложений. Сочетание моей базы в
              теоретической физике и интенсивного обучения JavaScript позволяет
              мне эффективно решать алгоритмические задачи и оптимизировать
              производительность фронтенд-части.
            </p>
          </div>

          <div className="focus-areas">
            <div className="area-card">
              <h4>Clean Code</h4>
              <p>
                Соблюдение стандартов ESLint, AirBnB style guide и принципов
                SOLID.
              </p>
            </div>
            <div className="area-card">
              <h4>UI/UX</h4>
              <p>
                Создание адаптивных и кроссбраузерных интерфейсов с
                использованием SCSS.
              </p>
            </div>
          </div>

          <div className="tech-stack">
            <h3>Технологический стек</h3>
            <div className="tags-container">
              {skills.map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="trainee-footer">
          <Link to="/web.lab1/main" className="btn-back">
            <span className="icon">←</span> На главную
          </Link>
          <div className="internship-period">
            Период: Февраль 2026 — Настоящее время
          </div>
        </footer>
      </div>
    </div>
  );
}
