FROM node:lts-alpine
WORKDIR /app-money
COPY . .
COPY package.json .
RUN npm install
EXPOSE 3030
RUN chown -R node /app-money
USER node
CMD ["node","index.js"]
