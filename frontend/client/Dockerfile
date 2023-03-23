FROM node:14.21-alpine
WORKDIR /frontend/client
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start","0.0.0.0:3000"]