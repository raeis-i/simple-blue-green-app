# Use the latest version of Node.js with Alpine
FROM node:23-alpine3.21

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if any)
COPY package*.json ./

# Install the app dependencies
RUN npm install --production --frozen-lockfile

# Copy the rest of the application files (index.js, index.html)
COPY . .

# Set environment variable for page color (default to blue)
ENV PAGE_COLOR=blue

# Expose port 8080
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]
