# 🚀 Vite + React + TypeScript Шаблон

Универсальный шаблон проекта на базе Vite, React и TypeScript.

## ⚙️ Быстрый старт

```bash
npm create vite@latest

При появлении вопросов в консоли:

◇ Project name: .
◇ Select a framework: React
◇ Select a variant: TypeScript

Затем:

npm i
npm install --save-dev prettier
npm install modern-normalize
npm install axios
npm install -D @types/axios

```

## 📁 Структура проекта

```bash

my-app/
├── public/                      # Статические файлы (favicon, шрифты, изображения)
│   └── ...
├── src/
│   ├── components/              # Все компоненты приложения
│   │   ├── App/                 # Главный компонент App
│   │   │   ├── App.tsx
│   │   │   └── App.module.css
│   │   ├── Common/              # Общие переиспользуемые UI-компоненты
│   │   ├── Layout/              # Компоненты разметки (Header, Footer)
│   │   └── (и другие папки под задачи)
│   ├── types/                   # Общие интерфейсы и типы
│   │   └── votes.ts
│   ├── assets/                  # Картинки, иконки, шрифты и т.п.
│   ├── index.css                # Глобальные стили
│   ├── main.tsx                 # Точка входа React-приложения
│   └── vite-env.d.ts            # Типы Vite для TypeScript
├── index.html                   # HTML-шаблон
├── package.json                 # Конфигурация проекта и зависимости
├── tsconfig.json                # Конфигурация TypeScript
├── .prettierrc                  # Настройки Prettier
├── .gitignore                   # Исключаемые файлы для git
└── README.md                    # Этот файл 🙂

```

## 🧰 Полезные команды

```bash

npm run dev       # Запуск проекта в режиме разработки
npm run build     # Сборка проекта
npm run preview   # Просмотр прод-версии локально

```

## ✨ Используемые технологии

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=000)
![Normalize](https://img.shields.io/badge/Modern--Normalize-000000?style=flat)

## 📝 Заметки

```bash

    Компоненты делятся по смыслу:
    Common — переиспользуемые,
    Layout — обёртки и структура страницы,
    App — корневой.

    Все стили пишем через .module.css, чтобы избежать конфликтов.

```
