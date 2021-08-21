#Stage 1 - copying our app code in the app folder and installing app dependencies from package.json file and creating
# production build using node image

FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Stage 2 - using the Nginx server image to create the Nginx server and deploy our app on it by copying build items
# from /app/docs to Nginx server at /usr/share/Nginx/HTML location

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/docs/frankly-lawns-ui /usr/share/Nginx/html
