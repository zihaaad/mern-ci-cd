# Backend Dockerfile

FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Run the app
CMD ["node", "server.js"]
