# Kuro-Bar - Полнофункциональное приложение

Современное клиент-серверное приложение с TypeScript сервером и HTML/CSS/JS клиентом.

## 🏗 Структура проекта

```
Kuro-Bar/
├── client/          # Клиентская часть (HTML, CSS, JS)
│   ├── src/
│   │   ├── index.html
│   │   ├── js/main.js
│   │   └── scss/
│   └── gulpfile.js
└── server/          # Серверная часть (TypeScript, Express, SQLite)
    ├── 
    │── index.ts
    │── database.ts
    │── package.json
    └── tsconfig.json
```

## 🚀 Технологический стек

### Клиент
- **HTML5** - семантическая разметка
- **CSS3** - современные стили
- **JavaScript** - клиентская логика
- **Gulp** - сборка проекта

### Сервер
- **PHP** - Backend ЯП
- **Express** - веб-фреймворк
- **SQLite** - база данных

## 📦 Установка и запуск

Docker:
```bash
cd server
docker-compose up --build
```

### Клиент (HTML/CSS/JS)

```bash
cd client
npm install
npm start
```

## 🔧 Разработка
### Клиент
```bash
cd client
npm run build      
npm run watch      
```

## 🌐 API Endpoints

- `GET /api/health` - проверка состояния
- `GET /api/users` - список пользователей
- `POST /api/users` - создание пользователя
- `PUT /api/users/:id` - обновление пользователя
- `DELETE /api/users/:id` - удаление пользователя
- `POST /api/auth` - аутентификация

## 📱 Функциональность

### Клиентская часть
- Адаптивный дизайн
- SPA навигация
- Модальные окна
- API тестирование
- Уведомления

### Серверная часть
- RESTful API
- SQLite база данных
- Автоматическая инициализация БД

## 🐳 Docker

### Запуск сервера
```bash
cd server
docker-compose up --build
```

### Запуск клиента
```bash
cd client
# тут gulp для сборки
```

## 🔗 Связь клиент-сервер

Клиент подключается к серверу по адресу `http://localhost:3000/api`

## 📝 Скрипты

### Сервер
- `npm run dev` - разработка
- `npm run build` - сборка
- `npm start` - запуск
- `npm run watch` - слежение

### Клиент
- `npm start` - запуск dev сервера
- `npm run build` - сборка
- `npm run watch` - слежение

## 🚀 Быстрый старт

1. **Запустите сервер:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

2. **Запустите клиент:**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Откройте браузер:**
   - Клиент: `http://localhost:3000`
   - Сервер API: `http://localhost:3000/api`

## 📚 Документация

- [Серверная часть](./server/README.md)
- [Клиентская часть](./client/README.md)

---