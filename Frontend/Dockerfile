FROM node:16.13.1-alpine

WORKDIR /app

# Copy dependency definitions
COPY . .

RUN npm i -g @angular/cli@13.1.0
RUN npm i sweetalert2
# Install dependencies
RUN npm install

RUN npm run build

RUN rm -rf /usr/src/app/src
RUN rm -rf /usr/src/app/node_modules

# Expose the port the app runs in
EXPOSE 4317

# Serve the app
CMD ["npm", "run", "start:prod"]