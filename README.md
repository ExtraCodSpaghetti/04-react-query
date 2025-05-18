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

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="40" alt="Vite" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" alt="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="40" alt="Axios" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg" width="40" alt="Prettier" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="Normalize.css (CSS icon)" />
</p>

## 📝 Заметки

```bash

    Компоненты делятся по смыслу:
    Common — переиспользуемые,
    Layout — обёртки и структура страницы,
    App — корневой.

    Все стили пишем через .module.css, чтобы избежать конфликтов.

```
