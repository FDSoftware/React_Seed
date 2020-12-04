FROM node:12.13.1-buster-slim as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn global add react-scripts@3.2.0
COPY . /app

RUN yarn install
RUN yarn run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf && chmod -R 777 /var/cache/nginx && chmod -R 777 /var/run/
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

USER 1001

CMD ["nginx", "-g", "daemon off;"]