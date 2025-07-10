FROM node:18
WORKDIR /
COPY . .
RUN npm install
EXPOSE 3000
CMD ["sh", "-c", "node set-backend-url.js && node server.js"]

