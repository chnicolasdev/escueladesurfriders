FROM node:22-alpine

# Instalar dependencias de compilación para better-sqlite3
RUN apk add --no-cache python3 make g++ gcc libc-dev

WORKDIR /app

# Copiar package.json primero
COPY package*.json ./
RUN npm ci

# Copiar el resto del código
COPY . .

# Recompilar better-sqlite3 para la arquitectura del contenedor
RUN npm rebuild better-sqlite3

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=1337
ENV HOST=0.0.0.0

# Build de Strapi
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]