FROM node:alpine



COPY . /app



WORKDIR /app/LL


CMD ["node", "main.js"]