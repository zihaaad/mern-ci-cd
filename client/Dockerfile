FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app using Vite
RUN npm run build

# Install http-server globally
RUN npm install -g http-server

# Expose port 5173 for frontend
EXPOSE 5173

# Serve the production build using http-server on port 5173
CMD ["http-server", "dist", "-p", "5173"]
