import { Link } from 'react-router-dom';

import photo from '../../shared/assets/images/photo.jpg'

import './BiographyPage.scss';

export function BiographyPage() {

    return (
        <div className='biographyPage'>
            <div className="about-container">
                <header className="about-header">
                    <div className="photo-wrapper">
                        <img src={photo} alt="Новиков Дмитрий" />
                    </div>
                    <h1>Обо мне</h1>
                </header>
                <section className="biography">
                    <h3>Биография</h3>
                    <p>
                        Привет! Меня зовут Дмитрий. Я являюсь студентом
                        <strong> ГГУ им. Франциска Скорины</strong>. Мой путь в мир технологий начался
                        с глубокого интереса к фундаментальным законам природы, что привело меня на
                        <strong> факультет физики и ИТ</strong>.
                    </p>
                    <p>
                        На данный момент я обучаюсь на <strong>кафедре теоретической физики</strong>.
                        Это дает мне уникальную базу: умение работать со сложными математическими моделями
                        и аналитический склад ума, который я успешно применяю в программировании и разработке
                        информационных систем.
                    </p>
                </section>
                <section className="info-grid">
                    <div className="info-item">
                        <span className="label">Специализация</span>
                        <p>Компьютерная физика</p>
                    </div>
                    <div className="info-item">
                        <span className="label">Навыки</span>
                        <p>C, C++, HTML/SCSS, React.js, Typescript</p>
                    </div>
                    <div className="info-item">
                        <span className="label">Интересы</span>
                        <p>Квантовая механика, веб-технологии, тяжелая атлетика</p>
                    </div>
                </section>
                <footer className="about-footer">
                    <Link to="/web.lab1/main" className="btn-back">
                        <span className="icon">←</span> На главную
                    </Link>
                </footer>
            </div>
        </div>
    )
}
