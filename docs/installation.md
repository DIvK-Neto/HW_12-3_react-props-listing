# Установка и запуск

## Требования

- Node.js 20+ (LTS)
- npm (входит в состав Node.js)

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/DIvK-Neto/HW_12-3_react-props-listing.git
cd HW_12-3_react-props-listing
```


2. Установите зависимости:

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```


Сервер запустится на `http://localhost:5173/`.

## Сборка для продакшена

```bash
npm run build
```

Собранные файлы появятся в папке `dist`.

## Линтинг

```bash
npm run lint
```

## Деплой на GitHub Pages

После пуша в ветку `main` GitHub Actions автоматически собирает и деплоит приложение. Ссылка на демо:  
`https://DIvK-Neto.github.io/HW_12-3_react-props-listing/`