FROM node as vite-app

WORKDIR /app
COPY ./ .

RUN npm i
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/

RUN rm -rf html
RUN mkdir auth

WORKDIR /

COPY ./nginx.conf /etc/nginx
COPY --from=vite-app ./app/dist /usr/share/nginx/auth

ENTRYPOINT ["nginx", "-g", "daemon off;"]