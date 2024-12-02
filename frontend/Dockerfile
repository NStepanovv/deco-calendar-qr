# Используем официальный Node.js образ для сборки
FROM node:16 as build

WORKDIR /app

# Устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Сборка проекта
COPY . ./
RUN npm run build