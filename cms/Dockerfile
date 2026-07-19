FROM node:20-alpine

WORKDIR /app

# Copiar package.json primero (cache de capas)
COPY package*.json ./
RUN npm ci

# Copiar el resto
COPY . .

# Variables de entorno para build
ENV NODE_ENV=production
ENV PORT=1337
ENV HOST=0.0.0.0

# Build de Strapi
RUN npm run build

# Exponer puerto
EXPOSE 1337

# Comando de inicio
CMD ["npm", "run", "start"]