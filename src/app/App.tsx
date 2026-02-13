import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.scss';

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/web.lab1/main');
    }, 5000); // Автомат. редирект через 5 сек.
  }, []);

  return (
    <div className="index">
      <main>
        <h1>Стартовая страница</h1>
        <ul>
          <li>Название лабораторной работы: </li><p>Структура HTML документов №1</p>
          <li>Цель: </li><p>Изучение структуры и реализация HTML документов</p>
          <li>ФИО: </li><p>Новиков Дмитрий Алексеевич</p>
          <li>Группа: </li><p>КФ-17</p>
        </ul>
      </main>
    </div>
  )
}