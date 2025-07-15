# Imagen base oficial de Node.js versión 14
FROM node:14-alpine
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia los archivos package.json y package-lock.json (si existe)
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Copia el resto del código fuente
COPY . .
# Expone el puerto 3000 para la app
EXPOSE 3000
# Comando para iniciar la aplicación
CMD ["node", "index.js"]

