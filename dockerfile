FROM node:alpine



COPY . /app



WORKDIR /app/dll


CMD ["node", "main.js"]