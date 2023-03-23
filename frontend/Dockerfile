FROM node:14.21-alpine
WORKDIR /frontend
COPY . .
RUN npm i

EXPOSE 5000
CMD ["npm","run","start","0.0.0.0:5000"]