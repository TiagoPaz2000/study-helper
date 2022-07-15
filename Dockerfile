FROM node:16-alpine

EXPOSE 3000

COPY package.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]