# Компонент Card

Простой React-компонент, отображающий карточку с заголовком, изображением, описанием и кнопкой для переключения цветовой схемы.

## Структура проекта

card_component/
├── src/
│ ├── components/
│ │ └── Card/
│ │ ├── Card.js
│ │ └── Card.module.css
│ ├── App/
│ │ └── App.js
│ └── styles/
│ └── App.css
├── package.json
└── README.md


### Обзор

Компонент `Card` является повторно используемым React-компонентом, который включает заголовок, изображение, описание и кнопку для изменения цветовой схемы. Стили компонента реализованы с использованием CSS Modules, что обеспечивает изолированные и модульные стили.

## Установка

Для настройки проекта локально выполните следующие шаги:

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/your-username/card-component.git
   cd card-component
Установите зависимости:

Убедитесь, что у вас установлены Node.js и npm. Затем выполните команду:

npm install
Использование
Для запуска приложения в режиме разработки выполните:

npm start
Это запустит приложение в режиме разработки. Откройте http://localhost:3000 в браузере.

Добавление компонента Card
Чтобы использовать компонент Card, импортируйте его в нужный компонент или страницу React и передайте необходимые пропсы (title, image, и description):

import React from 'react';
import Card from './components/Card/Card';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Card 
        title="Пример карточки"
        image="https://via.placeholder.com/300"
        description="Это описание карточки."
      />
    </div>
  );
}

export default App;
Пропсы компонента
Компонент Card принимает следующие пропсы:

title: Строка, представляющая заголовок карточки.
image: Строка, содержащая URL изображения для отображения на карточке.
description: Строка, представляющая текстовое описание карточки.
Настройка стилей
Стили компонента определены в файле Card.module.css. Вы можете настроить стили, изменяя этот файл. CSS-файл включает основные стили для карточки, такие как рамка, отступы, размеры шрифта и переходы цветов.

Пример стилей в Card.module.css
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
}

.title {
  font-size: 24px;
  margin-bottom: 8px;
}

.image {
  width: 100%;
  height: auto;
  margin-bottom: 8px;
}

.description {
  font-size: 16px;
  margin-bottom: 16px;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}
Управление состоянием и событиями
Компонент использует хук useState для управления состоянием цветовой схемы карточки. Кнопка переключает состояние isFlipped, которое определяет цветовую схему карточки.

const [isFlipped, setIsFlipped] = useState(false);

const handleButtonClick = () => {
  setIsFlipped(!isFlipped);
};
Развертывание
Для развертывания приложения выполните команду:

npm run build
Это создаст директорию build с production-сборкой вашего приложения. Затем вы можете развернуть его на любой статический хостинг, такой как Vercel, Netlify, GitHub Pages и т.д.
