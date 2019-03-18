FROM node:8
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY ./filemaster/*
COPY ./public/*
RUN npm install
# If you are building your code f
or production
# RUN npm ci --only=production

# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
