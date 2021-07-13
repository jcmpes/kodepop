#Step 1
FROM node:14.16.0-alpine

RUN mkdir /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

#Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html
