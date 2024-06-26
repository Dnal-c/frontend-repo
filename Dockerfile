FROM node:lts-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]